import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TicTacToeBoard({ playerSymbol, cpuSymbol }) {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // Start CPU's turn if it's the CPU's first move
    if (!isPlayerTurn) {
      handleCpuMove(board);
    }
  }, []);

  // Function to handle a player's move
  const handlePlayerMove = (index) => {
    if (!board[index] && !winner && isPlayerTurn) {
      const newBoard = [...board];
      newBoard[index] = playerSymbol;
      setBoard(newBoard);
      setIsPlayerTurn(false);
      checkWinner(newBoard);
      // It's now CPU's turn
      setTimeout(() => handleCpuMove(newBoard), 500); // Delay CPU move for effect
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
      setIsPlayerTurn(true);
      checkWinner(newBoard);
    }
  };

  // Function to check if there's a winner
  const checkWinner = (currentBoard) => {
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
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinner(currentBoard[a]);
        return;
      }
    }

    // Check for a draw
    if (!currentBoard.includes(null) && !winner) {
      setWinner('draw');
    }
  };

  // Function to render a cell
  const renderCell = (value, index) => (
    <TouchableOpacity
      key={index}
      style={styles.cell}
      onPress={() => handlePlayerMove(index)}
      disabled={value || winner}
    >
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );

  // Function to render the entire board
  const renderBoard = () => (
    <View style={styles.board}>
      {board.map((cell, index) => renderCell(cell, index))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.turn}>
        {winner
          ? winner === 'draw'
            ? "It's a draw!"
            : `${winner === playerSymbol ? 'Player' : 'CPU'} wins!`
          : `${isPlayerTurn ? 'Player' : 'CPU'}'s turn`}
      </Text>
      {renderBoard()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  turn: {
    fontSize: 18,
    marginBottom: 20,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'lightgray',
  },
  cellText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
