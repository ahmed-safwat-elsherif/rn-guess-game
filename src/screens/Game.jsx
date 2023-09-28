import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import GuessOutput from '../components/game/GuessOutput';
import { COLORS } from '../utils/theme';
import GuessHelpers from '../components/game/GuessHelpers';
import genRandBetween from '../utils/genRandBetween';
import GuessLogItem from '../components/game/GuessLogItem';

const genInitial = () => genRandBetween(0, 100);
const Game = ({ selectedNumber }) => {
  const [guess, setGuess] = useState(genInitial);
  const [logs, setLogs] = useState([]);
  const onGuessHigher = useCallback(() => {
    const newGuess = genRandBetween(guess + 1, 100);
    setGuess(newGuess);
  }, []);

  const onGuessLower = useCallback(() => {
    const newGuess = genRandBetween(0, guess);
    setGuess(newGuess);
  }, []);
  useEffect(() => {
    if (selectedNumber === guess) return;
    setLogs((prevLogs) => [...prevLogs, guess]);
  }, [selectedNumber, guess]);

  console.log({ guess });
  return (
    <View style={styles.container}>
      <Title>Opponent's Guessing</Title>
      <GuessOutput guess={guess} />
      {selectedNumber === guess ? (
        <Text style={styles.text}>Yaaay! 😁👌</Text>
      ) : (
        <>
          <Text style={styles.text}>Nope! 😢</Text>
          <GuessHelpers onGuessHigher={onGuessHigher} onGuessLower={onGuessLower} />
        </>
      )}
      <View style={styles.sperator} />
      <Text style={[styles.text, styles.hintText]}>Logs</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          data={logs}
          renderItem={GuessLogItem}
          keyExtractor={(item, index) => `${index}-${item}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  hintText: { fontSize: 15 },
});

export default Game;
