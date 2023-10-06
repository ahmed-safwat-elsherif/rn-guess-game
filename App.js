import { useMemo, useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import StartGame from './src/screens/StartGame';
import Game from './src/screens/Game';
import { COLORS } from './src/utils/theme';
import { FONT_URLS } from './src/utils/fontVariants';

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [fontLoaded, error] = useFonts(FONT_URLS);
  const Screen = useMemo(() => (!selectedNumber ? StartGame : Game), [selectedNumber]);
  console.log({ fontLoaded });
  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[COLORS.primary500, COLORS.secondary]} style={styles.container}>
        <ImageBackground
          source={require('./assets/images/nature.jpg')}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.bgImage}
        >
          <SafeAreaView style={styles.container}>
            <Screen
              onChangeNumber={setSelectedNumber}
              selectedNumber={selectedNumber}
              onRestart={() => setSelectedNumber(null)}
            />
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: { opacity: 0.15 },
});
