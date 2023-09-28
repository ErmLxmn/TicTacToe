import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";



export default function HowToPlayScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
       <Text style={styles.title}>HOW TO PLAY</Text>
      </View>

{/* 
      <View style={styles.boxesp}>
            <View>
                <Text style={styles.name}>this </Text>
            </View>
            <View>
                <Text style={styles.name}>is an</Text>
            </View>
            <View>
                <Text style={styles.name}> apps</Text>
            </View>

      </View> */}

      {/* <View style={styles.boxesp}>
            <View>
                <Text style={styles.name}>this </Text>
            </View>
            <View>
                <Text style={styles.name}>is an</Text>
            </View>
            <View>
                <Text style={styles.name}> apps</Text>
            </View>

      </View> */}

      <View style={styles.boxesp}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
                <Text style={styles.nameTictac}>Tic-Tac-Toe is a two-player game typically played on a 3x3 grid. The goal is to be the first player to get three of your marks (either "X" or "O") in a row horizontally, vertically, or diagonally. Here's a basic guide on how to play Tic-Tac-Toe:
               </Text>

               <Text style={styles.name}>1.  The player with "X" usually goes first.</Text>

               <Text style={styles.nameRules}>Rules:</Text>

               <Text style={styles.name2Players}>2. Two players take turns, one using "X" and the other using "O."</Text>

               <Text style={styles.nameThePlayer}>1.The player with "X" usually goes first.</Text>

               <Text style={styles.nameGamePlay}>Gameplay:</Text>

               <Text style={styles.nameGame4players}>4. Players take turns placing their symbol ("X" or "O") in an empty cell of the grid.</Text>

               <Text style={styles.nameTheFirst}>1. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.</Text>

               <Text style={styles.nameIfAllThe}>2. If all the cells are filled, and no player has three in a row, the game is a tie (a "draw").</Text>

               <Text style={styles.nameWinning}>Winning:</Text>

               <Text style={styles.nameAplayer}>
                A player wins by forming a straight line of three of their symbols. This can be horizontal, vertical, or diagonal. For example:</Text>



                {/* Diagonal */}

                <Text style={styles.nameDia}>Diagonal</Text>

                <View style={styles.diagonal}>
                  <Image
                    source={require('../assets/howtoplayImage/diagonal1.jpg')} // Path to your image in the assets folder
                    style={styles.diaimage}
                  />
                </View>

                {/* Horizontal */}

                <Text style={styles.nameHor}>Horizontal</Text>

                <View style={styles.horizontal}>
                  <Image
                    source={require('../assets/howtoplayImage/horizontal1.jpg')} // Path to your image in the assets folder
                    style={styles.horimage}
                  />
                </View>

                {/* vertical */}

                <Text style={styles.nameVer}>Vertical</Text>

                <View style={styles.vertical}>
                  <Image
                    source={require('../assets/howtoplayImage/vertical1.jpg')} // Path to your image in the assets folder
                    style={styles.verimage}
                  />
                </View>


                <Text style={styles.nameDraw}>Draw:</Text>

                <Text style={styles.nameIfAll}>5. If all the cells are filled, and no player has won, the game ends in a draw or a tie.</Text>

                <Text style={styles.nameDeclare}>Declare a Winner or a Draw:</Text>

                <Text style={styles.nameOnce}>6. Once one player has achieved three in a row or all the cells are filled, the game ends. If a player has three in a row, they declare themselves the winner. If all cells are filled, and no player has three in a row, the game is a draw.</Text>
                
                <Text style={styles.namePlay}>Play Again (Optional):</Text>    

                <Text style={styles.nameYou}>7. You can play as many rounds as you like, switching the starting player each time.</Text>

                <Text style={styles.nameTic}>Tic Tac Toe is a quick and straightforward game with limited possibilities, so it's possible for experienced players to reach a draw in most games. However, it's still a fun and engaging game to play with friends and family.</Text>   
            
            
            
            </ScrollView>
           
           
           
           
           
            {/* <View>
                <Text style={styles.name}> is an</Text>
            </View>
            <View>
                <Text style={styles.name}> apps</Text>
            </View> */}

      </View>

      {/* <View style={styles.boxesp}>
            <View>
                <Text style={styles.name}>this </Text>
            </View>
            <View>
                <Text style={styles.name}>is an</Text>
            </View>
            <View>
                <Text style={styles.name}> apps</Text>
            </View>

      </View> */}

  
     
      
    {/* <View style={{ flex: 1, flexDirection: 'row' }}>
      {/* Child components
      <View style={{ flex: 1, backgroundColor: 'red', padding: 10 , height: 200,}}>
        <Text style={styles.mall}>Component 1</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'blue', padding: 10, height: 200, }}>
        <Text style={styles.mall}>Component 2</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green', padding: 10, height: 200, }}>
        <Text style={styles.mall}>Component 3</Text>
      </View>
    </View> */}


    </SafeAreaView>
  )



  
  
}

const styles = StyleSheet.create({
title:{color:'green', alignSelf: 'center', fontSize: 50, marginBottom: 15, marginTop: 20},
name: {color:'green',  fontSize: 26, marginRight: 15, marginLeft: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
boxesp: {display: 'flex', flexDirection: 'row'},
nameRules: {color:'green', marginLeft: 34, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameTictac: {color:'green', marginLeft: 15, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
name2Players: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameThePlayer: {color:'green', marginLeft: 15, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameGamePlay: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameGame4players: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameTheFirst: {color:'green', marginLeft: 15, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameIfAllThe: {color:'green', marginLeft: 15, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameWinning: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameAplayer: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
scrollview: {height: Dimensions.get('window').height - 150},
diagonal: {justifyContent: 'center', alignItems: 'left', marginLeft: 34},
diaimage: {width: 200, height: 250, marginBottom: 15,},
nameDia: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameHor: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
horizontal: {justifyContent: 'center', alignItems: 'left', marginLeft: 34},
horimage: {width: 200, height: 250, marginBottom: 15,},
nameVer: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
vertical: {justifyContent: 'center', alignItems: 'left', marginLeft: 34},
verimage: {width: 200, height: 250, marginBottom: 15,},
nameDraw: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameIfAll: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameDeclare: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameOnce: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
namePlay: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameYou: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},
nameTic: {color:'green', marginLeft: 34, marginRight: 15, fontSize: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 15,},



 


 






})