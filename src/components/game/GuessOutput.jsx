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
    elevation: 5,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 30,
    minHeight: 100,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  text: {
    color: COLORS.primary600,
    fontWeight: '600',
  },
  question: { fontSize: 20 },
  guess: { fontSize: 50 },
});
export default GuessOutput;
