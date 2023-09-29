import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

export default function HowToPlayScreen() {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{t("how_to_play")}</Text>
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

        {/* <Text style={styles.title}>{t("")}</Text> */}

        <View style={styles.boxesp}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollview}
          >
            <Text style={styles.nameTictac}>{t("tic_tac_toe")}</Text>

            {/* fin.... */}

            <Text style={styles.name}>{t("the_player")}</Text>

            {/* fin.... */}

            <Text style={styles.nameRules}>{t("rules")}</Text>

            {/* fin.... */}

            <Text style={styles.name2Players}>{t("two_players")}</Text>

            {/* fin.... */}

            <Text style={styles.nameThePlayer}>{t("the_player1")}</Text>

            {/* fin... */}

            <Text style={styles.nameGamePlay}>{t("gameplay")}</Text>

            {/* fin... */}

            <Text style={styles.nameGame4players}>{t("players_take")}</Text>

            {/* fin... */}

            <Text style={styles.nameTheFirst}>{t("first_player")}</Text>

            {/* fin... */}

            <Text style={styles.nameIfAllThe}>{t("the_cells")}</Text>

            {/* fin... */}

            <Text style={styles.nameWinning}>{t("winning")}</Text>

            {/* fin... */}

            <Text style={styles.nameAplayer}>{t("player_wins")}</Text>

            {/* fin... */}

            {/* <Text style={styles.title}>{t("")}</Text> */}

            {/* Diagonal */}

            <Text style={styles.nameDia}>{t("diagonal")}</Text>

            {/* fin... */}

            <View style={styles.diagonal}>
              <Image
                source={require("../assets/howtoplayImage/diagonal1.jpg")} // Path to your image in the assets folder
                style={styles.diaimage}
              />
            </View>

            {/* Horizontal */}

            <Text style={styles.nameHor}>{t("horizonal")}</Text>

            <View style={styles.horizontal}>
              <Image
                source={require("../assets/howtoplayImage/horizontal1.jpg")} // Path to your image in the assets folder
                style={styles.horimage}
              />
            </View>

            {/* vertical */}

            <Text style={styles.nameVer}>{t("vertical")}</Text>

            <View style={styles.vertical}>
              <Image
                source={require("../assets/howtoplayImage/vertical1.jpg")} // Path to your image in the assets folder
                style={styles.verimage}
              />
            </View>

            {/* draw */}

            <Text style={styles.nameDraw}>{t("draw1")}</Text>

            {/* fin... */}

            <View style={styles.draw}>
              <Image
                source={require("../assets/howtoplayImage/Draw1.jpg")} // Path to your image in the assets folder
                style={styles.drawimage}
              />
            </View>

            {/* <Text style={styles.title}>{t("")}</Text> */}

            <Text style={styles.nameIfAll}>{t("all_the_cells")}</Text>

            {/* fin... */}

            <Text style={styles.nameDeclare}>{t("declare_winner")}</Text>

            {/* fin... */}

            <Text style={styles.nameOnce}>{t("once_player")}</Text>

            {/* fin... */}

            <Text style={styles.namePlay}>{t("play_again1")}</Text>

            {/* fin... */}

            <Text style={styles.nameYou}>{t("can_play")}</Text>

            <Text style={styles.nameTic}>{t("tic_tac_toe1")}</Text>
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
      <View style={{ flex: 1, backgroundColor: 'white', padding: 10, height: 200, }}>
        <Text style={styles.mall}>Component 3</Text>
      </View>
    </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    alignSelf: "center",
    fontSize: 50,
    marginBottom: 15,
    marginTop: 20,
  },
  name: {
    color: "white",
    fontSize: 26,
    marginRight: 15,
    marginLeft: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  boxesp: { display: "flex", flexDirection: "row" },
  nameRules: {
    color: "white",
    marginLeft: 34,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameTictac: {
    color: "white",
    marginLeft: 15,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  name2Players: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameThePlayer: {
    color: "white",
    marginLeft: 15,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameGamePlay: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameGame4players: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameTheFirst: {
    color: "white",
    marginLeft: 15,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameIfAllThe: {
    color: "white",
    marginLeft: 15,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameWinning: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameAplayer: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  scrollview: { height: Dimensions.get("window").height - 150 },
  diagonal: { justifyContent: "center", alignItems: "left", marginLeft: 34 },
  diaimage: { width: 200, height: 250, marginBottom: 15 },
  nameDia: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameHor: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  horizontal: { justifyContent: "center", alignItems: "left", marginLeft: 34 },
  horimage: { width: 200, height: 250, marginBottom: 15 },
  nameVer: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  vertical: { justifyContent: "center", alignItems: "left", marginLeft: 34 },
  verimage: { width: 200, height: 250, marginBottom: 15 },
  nameDraw: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameIfAll: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameDeclare: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameOnce: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  namePlay: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameYou: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  nameTic: {
    color: "white",
    marginLeft: 34,
    marginRight: 15,
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 15,
  },
  drawimage: { width: 200, height: 250, marginBottom: 15 },
  draw: { justifyContent: "center", alignItems: "left", marginLeft: 34 },
});
