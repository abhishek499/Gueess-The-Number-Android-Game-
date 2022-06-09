import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import defaultStyles from "../constants/default-styles";

const GameOver = (props) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View style={styles.screen}>
        <BodyText style={defaultStyles.title}>The Game is Over!</BodyText>
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
    </ScrollView>
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 10,
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
