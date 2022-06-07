import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/success2.jpg")}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText>
          Number of rounds needed
          <Text> {props.roundsNumber} </Text>and number choosen was
          <Text> {props.userNumber} </Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: "5%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  resultContainer: {
    marginHorizontal: "20%",
    marginVertical: "7%",
  },
});
