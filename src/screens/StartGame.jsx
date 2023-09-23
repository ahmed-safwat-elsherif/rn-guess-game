import React from "react";
import { Text, View } from "react-native";
import Button from "../components/shared/Button";

const StartGame = () => {
  return (
    <View>
      <Text>StartGame</Text>
      <Button
        viewProps={{ style: { backgroundColor: "red" } }}
        textProps={{ style: { color: "white" } }}
      >
        Hello there
      </Button>
    </View>
  );
};

export default StartGame;
