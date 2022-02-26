import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientContainer = (props) => {
  return (
    <View>
      <LinearGradient
        colors={["#0061FF", "#B0F7FF", "#B0F7FF"]}
        style={{
          flex: 1,
        }}
      >
        {props.children}
      </LinearGradient>
    </View>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({});
