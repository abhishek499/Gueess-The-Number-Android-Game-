import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const Header = (props) => {
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [width, setWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const updateLayout = () => {
      setHeight(Dimensions.get("window").height);
      setWidth(Dimensions.get("window").width);
    };

    const subscription = Dimensions.addEventListener("change", updateLayout);

    return () => {
      subscription.remove();
      // Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <View
      style={{
        ...styles.header,
        height: height > 400 ? height / 8.5 : "20%",
        paddingTop: height > 400 ? "12%" : "5%",
      }}
    >
      <Text style={{ ...styles.headerTitle, ...DefaultStyles.heading }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    // height: height / 8.5,
    // paddingTop: Dimensions.get("window").height > 400 ? "12%" : "0%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
  },
});

export default Header;
