import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../utils/theme';

const GuessOutput = ({ guess }) => (
  <View style={styles.container}>
    <Text style={[styles.text, styles.question]}>My guess is </Text>
    <Text style={[styles.text, styles.guess]}>{guess}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: COLORS.secondary,
    borderWidth: 5,
    marginHorizontal: 30,
    minHeight: 100,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
    padding: 5,
  },
  text: {
    color: COLORS.secondary,
    fontWeight: '600',
  },
  question: { fontSize: 20 },
  guess: { fontSize: 50 },
});
export default GuessOutput;
