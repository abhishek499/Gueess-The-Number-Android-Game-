import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BodyText = (props) => {
  return (
    <View>
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    </View>
  );
};

export default BodyText;

const styles = StyleSheet.create({ text: { fontFamily: "ps-regular" } });
