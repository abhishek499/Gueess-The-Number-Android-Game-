import { View, Text } from "react-native";
import React, { useState } from "react";

const ScreenDimension = () => {
  var height = Dimensions.get("window").height,
    width = Dimensions.get("window").width;

  const updateLayout = () => {
    height = Dimensions.get("window").height;
    width = Dimensions.get("window").width;
  };

  Dimensions.addEventListener("change", updateLayout);
  return { height, width };
};

export default ScreenDimension;
