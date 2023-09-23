import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./src/screens/StartGame";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.container}>
        <ImageBackground
          source={require("./assets/images/nature.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.bgImage}
        >
          <StartGame />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: { opacity: 0.15 },
});
