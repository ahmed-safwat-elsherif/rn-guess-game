import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import GuessOutput from '../components/game/GuessOutput';
import { COLORS } from '../utils/theme';
import GuessHelpers from '../components/game/GuessHelpers';
import GuessLogItem from '../components/game/GuessLogItem';
import Button from '../components/shared/Button';
import createGuessEngine, { GUESS_DIRECTION } from '../utils/createGuessEngine';
import GameOver from '../components/game/GameOver';
import { useDeviceOriantation } from '../hooks/useDeviceOriantation';

const MIN = 0;
const MAX = 100;
const { guess: guesser, reset: resetGuess } = createGuessEngine(MIN, MAX);
const genInitial = () => guesser().value;

const Game = ({ selectedNumber, onRestart }) => {
  const [guess, setGuess] = useState(genInitial);
  const [logs, setLogs] = useState([]);
  const { isLandscape } = useDeviceOriantation();

  const handleReset = useCallback(() => {
    resetGuess();
    onRestart();
  }, [onRestart]);

  const handleNextGuess = useCallback((direction) => {
    const { value, error } = guesser(direction);
    if (error || (!value && value !== 0)) {
      Alert.alert('Boundaries error', 'You have to choose the boundaries precisely!', [
        { text: 'OK!', onPress: handleReset },
      ]);
    } else {
      setGuess(value);
    }
  }, []);

  const result = useMemo(
    () => (
      <View style={styles.container}>
        <Title>Opponent's Guessing</Title>
        <GuessOutput guess={guess} />
        {selectedNumber === guess ? (
          <GameOver />
        ) : (
          <>
            <Text style={styles.text}>Nope! 😢</Text>
            <GuessHelpers
              onGuessHigher={() => handleNextGuess(GUESS_DIRECTION.HIGHER)}
              onGuessLower={() => handleNextGuess(GUESS_DIRECTION.LOWER)}
            />
          </>
        )}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button
            onPress={handleReset}
            rippleColor={COLORS.primary600}
            viewProps={{ style: [styles.correctBtnView, { paddingHorizontal: 20 }] }}
            textProps={{ style: styles.correctBtnText }}
          >
            Restart
          </Button>
        </View>
        <View style={styles.sperator} />
        <Text style={[styles.text, styles.hintText]}> -- Tries -- </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={logs}
            renderItem={GuessLogItem}
            keyExtractor={(item, index) => `${index}-${item}`}
            horizontal={isLandscape}
          />
        </View>
      </View>
    ),
    [handleNextGuess, handleReset, selectedNumber, guess, isLandscape, logs]
  );
  useEffect(() => {
    if (selectedNumber === guess) return;
    setLogs((prevLogs) => [...prevLogs, guess]);
  }, [selectedNumber, guess]);

  return isLandscape ? <ScrollView style={styles.container}>{result}</ScrollView> : result;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  correctBtnView: {
    backgroundColor: COLORS.primary500,
  },
  correctBtnText: {
    color: 'white',
  },
  wrongContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  text: { textAlign: 'center', color: 'white', fontSize: 20 },
  sperator: {
    borderBottomColor: COLORS.gray300,
    borderBottomWidth: 1,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  hintText: { fontSize: 20 },
});

export default Game;
