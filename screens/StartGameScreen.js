import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfrmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfrmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "desctructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfrmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOuput;

  if (confirmed) {
    confirmedOuput = (
      <Card style={styles.summaryContainer}>
        <Text style={defaultStyles.title}>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <Text style={{ ...styles.title, ...defaultStyles.title }}>
            Start a New Game!
          </Text>
          <Card style={styles.inputContainer}>
            <Text style={defaultStyles.title}> Select a Number</Text>
            <Input
              style={{ ...styles.input, ...defaultStyles.body }}
              blurOnSubmit
              autoCapitalize="none"
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <MainButton
                  title="Reset"
                  onPress={resetInputHandler}
                  color={Colors.accent}
                  style={{ ...defaultStyles.body, ...styles.button }}
                >
                  Reset
                </MainButton>
              </View>
              <View style={styles.button}>
                <MainButton
                  title="Confirm"
                  onPress={confirmInputHandler}
                  color={Colors.primary}
                  style={{ ...defaultStyles.body, ...styles.button }}
                >
                  Confirm
                </MainButton>
              </View>
            </View>
          </Card>
          {confirmedOuput}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: { fontSize: 20, marginVertical: 10, fontFamily: "ps-bold" },
  inputContainer: {
    width: "80%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    // width: 120,
    // width: Dimensions.get("window").width / 4,
  },
  input: {
    width: 70,
    textAlign: "center",
  },
  summaryContainer: {
    margin: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
