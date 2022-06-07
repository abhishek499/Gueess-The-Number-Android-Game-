import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...DefaultStyles.heading }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: "12%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
  },
});

export default Header;
