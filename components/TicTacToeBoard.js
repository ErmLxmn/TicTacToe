import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from "react-native";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";

export default function TicTacToeBoard({
  playerSymbol,
  cpuSymbol,
  player,
  navigation,
}) {
  const firstTurn = player === "player" ? true : false;
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isPlayerTurn, setIsPlayerTurn] = useState(firstTurn);
  const [winner, setWinner] = useState(null);
  // Inside the TicTacToeBoard component
  const [showModal, setShowModal] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState("");
  const [winningCombination, setWinningCombination] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    // Start CPU's turn if it's the CPU's first move
    if (!isPlayerTurn) {
      setTimeout(() => handleCpuMove(board), 500);
    }
  }, [isPlayerTurn]);

  useEffect(() => {
    // Add a event listener for the hardware back button press
    const backAction = () => {
      // Add your custom logic here
      // For example, you can navigate back or show a confirmation dialog
      // Return true to prevent the default back action (closing the app)
      // Return false to allow the default back action (going back in navigation)
      // You can customize this behavior as per your needs
      // For example, show a confirmation dialog before navigating back

      // Example: show a confirmation dialog
      //   if (shouldShowConfirmationDialog) {
      //     showConfirmationDialog();
      //     return true; // Prevent default back action
      //   }

      // Example: navigate back
      navigation.navigate("PlayerChoiceScreen");
      // return true; // Prevent default back action

      // By default, we'll just prevent the back action
      return true;
    };

    // Add the event listener
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Clean up the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);

  // Function to handle a move (player or CPU)
  const handleMove = (index) => {
    if (!board[index] && !winner) {
      if (isPlayerTurn) {
        handlePlayerMove(index);
      } else {
        handleCpuMove(board);
      }
    }
  };

  // Function to handle a player's move
  const handlePlayerMove = (index) => {
    if (!board[index] && !winner && isPlayerTurn) {
      const newBoard = [...board];
      newBoard[index] = playerSymbol;
      setBoard(newBoard);
      checkWinner(newBoard, index);
      setIsPlayerTurn(false);
    }
  };

  // Function to handle CPU's move (basic AI)
  const handleCpuMove = (currentBoard) => {
    if (!winner && !isPlayerTurn) {
      let emptyCells = [];
      for (let i = 0; i < currentBoard.length; i++) {
        if (!currentBoard[i]) {
          emptyCells.push(i);
        }
      }
      // Randomly select an empty cell
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const cpuMoveIndex = emptyCells[randomIndex];
      const newBoard = [...currentBoard];
      newBoard[cpuMoveIndex] = cpuSymbol;
      setBoard(newBoard);
      checkWinner(newBoard, randomIndex);
      setIsPlayerTurn(true);
    }
  };

  // Function to check if there's a winner
  const checkWinner = (currentBoard, index) => {
    // Define winning combinations (you can add more if needed)
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        handleWin(currentBoard[a], index, currentBoard);
        return;
      }
    }

    // Check for a draw
    if (!currentBoard.includes(null) && !winner) {
      handleWin("draw" , null , null);
    }
  };

  // Function to render a cell
  const renderCell = (value, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.cell}
        onPress={() => handleMove(index)}
        disabled={value || winner}
      >
        <Text style={styles.cellText}>{value}</Text>
      </TouchableOpacity>
    );
  };

  // Function to render the entire board
  const renderBoard = () => (
    <View style={styles.board}>
      {board.map((cell, index) => renderCell(cell, index))}
      {renderLines()}
    </View>
  );

  const renderLines = () => {
    const winCombinations = [
      { style: 'lineTop', arr: [0, 1, 2] }, //top
      { style: 'lineMiddleH', arr: [3, 4, 5] }, //middleH
      { style: 'lineBottom', arr: [6, 7, 8] }, //bottom
      { style: 'lineLeft', arr: [0, 3, 6] }, //left
      { style: 'lineMiddleV', arr: [1, 4, 7] }, //middleV
      { style: 'lineRight', arr: [2, 5, 8] }, //right
      { style: 'lineDiagonal1', arr: [0, 4, 8] }, //diagonal1
      { style: 'lineDiagonal2', arr: [2, 4, 6] }, //diagonal2
    ];

    return (
      <>
        {winCombinations.map((combination, index) => (
          arraysAreEqual(winningCombination, combination.arr) ? 
          <View key={index} style={styles[combination.style]}></View> : ""
        ))}
      </>
    );
  };

  // Function to handle the win condition
  const handleWin = (winner, index, currentBoard) => {
    // Set the winner message based on the 'winner' parameter
    // You can customize this message as needed
    // Example: "Player wins!" or "CPU wins!"

    const winnerMessage = `${
      winner === playerSymbol
        ? t("you_win")
        : winner === cpuSymbol
        ? t("you_lose")
        : t("draw")
    } `;
    setWinner(winner);

    if(winner === "draw"){
      setWinnerMessage(winnerMessage);
      // setShowModal(true);
      return;
    }
    
    setWinnerMessage(winnerMessage);
    checkWinningCell(winner, index, currentBoard);
    // setShowModal(true);
  };

  // Function to check if a cell is part of the winning combination
  const checkWinningCell = (winner, cellIndex, currentBoard) => {
    // Get the winning combination for the current winner
    const winCombinations = getWinningCombinations(winner, currentBoard);
    // Check if the current cellIndex is in the winning combination
    setWinningCombination(winCombinations);
    //setShowModal(true);
  };

  // Define the winning combinations based on the winner
  const getWinningCombinations = (currentWinner, currentBoard) => {
    // Define winning combinations (you can add more if needed)
    const winCombinations = [
      [0, 1, 2], //top
      [3, 4, 5], //middleH
      [6, 7, 8], //bottom
      [0, 3, 6], //left
      [1, 4, 7], //middleV
      [2, 5, 8], //right
      [0, 4, 8], //diagonal1
      [2, 4, 6], //diagonal2
    ];

    return winCombinations.flatMap((combination) => {
      const isWinning = combination.every((cellIndex) => {
        return currentBoard[cellIndex] === currentWinner;
      });
      return isWinning ? combination : [];
    });
  };

  // Function to handle the "Okay" button press in the modal
  const handlePlayAgainPress = () => {
    // Close the modal
    setShowModal(false);
    // Navigate the user back to another screen
    navigation.navigate("PlayerChoiceScreen");
  };

  const handleHomePress = () => {
    // Close the modal
    setShowModal(false);
    // Navigate the user back to another screen
    navigation.navigate("Home");
  };

  function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Text style={styles.turn}>
        {winner ? winnerMessage : `${isPlayerTurn ? t("your_turn") : t("cpu_turn")}`}
      </Text>
      <View style={styles.boardContainer}>{renderBoard()}</View>
      <ModalComponent
        isVisible={showModal}
        message={winnerMessage}
        onPlayAgainPress={handlePlayAgainPress}
        onHomePress={handleHomePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  turn: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white'
  },
  boardContainer: {
    width: 300,
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "lightgray",
  },
  cellText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  lineTop: {
    borderColor: "green",
    borderWidth: 6,
    width: 250,
    position: "absolute",
    top: 45,
  },
  lineBottom: {
    borderColor: "green",
    borderWidth: 6,
    width: 250,
    position: "absolute",
    bottom: 45,
  },
  lineMiddleH: {
    borderColor: "green",
    borderWidth: 6,
    width: 250,
    position: "absolute",
    top: 145,
  },
  lineMiddleV: {
    borderColor: "green",
    borderWidth: 6,
    width: 250,
    position: "absolute",
    top: 145,
    transform: [{ rotate: "90deg" }],
  },
  lineLeft: {
    borderColor: "green",
    borderWidth: 6,
    width: 250,
    position: "absolute",
    top: 145,
    transform: [{ rotate: "90deg" }],
    left: -75,
  },
  lineRight: {
    borderColor: "green",
    borderWidth: 6,
    width: 250,
    position: "absolute",
    top: 145,
    transform: [{ rotate: "90deg" }],
    right: -75,
  },
  lineDiagonal1: {
    borderColor: "green",
    borderWidth: 6,
    width: 290,
    position: "absolute",
    top: 145,
    transform: [{ rotate: "45deg" }],
    right: 5,
  },
  lineDiagonal2: {
    borderColor: "green",
    borderWidth: 6,
    width: 290,
    position: "absolute",
    top: 145,
    transform: [{ rotate: "-45deg" }],
    right: 5,
  },
});
