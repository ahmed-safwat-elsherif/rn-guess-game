import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../components/shared/Button";

const StartGame = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
        <Button
          rippleColor='"#660536"'
          viewProps={{ style: styles.buttonView }}
          textProps={{ style: { color: "white" } }}
        >
          Reset
        </Button>
        <Button
          rippleColor='"#660536"'
          viewProps={{ style: styles.buttonView }}
          textProps={{ style: { color: "white" } }}
        >
          Confirm
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginBottom: 10,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    minWidth: 50,
    alignSelf: "center",
    textAlign: "center",
  },
  buttonView: {
    backgroundColor: "#72063c",
    flex: 1,
    borderRadius: 30,
  },
});

export default StartGame;
