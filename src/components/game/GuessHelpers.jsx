import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../shared/Button';
import { COLORS } from '../../utils/theme';

const GuessHelpers = ({ onGuessHigher, onGuessLower }) => {
  return (
    <View style={styles.wrongContainer}>
      <Button
        onPress={onGuessHigher}
        rippleColor={COLORS.primary600}
        viewProps={{ style: styles.correctBtnView }}
        textProps={{ style: styles.correctBtnText }}
      >
        higher
      </Button>
      <Text style={[styles.text, styles.hintText]}>Or</Text>
      <Button
        onPress={onGuessLower}
        rippleColor={COLORS.primary600}
        viewProps={{ style: styles.correctBtnView }}
        textProps={{ style: styles.correctBtnText }}
      >
        lower
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  wrongContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  correctBtnView: { backgroundColor: COLORS.primary500 },
  correctBtnText: { color: 'white' },
  text: { textAlign: 'center', color: 'white', fontSize: 20 },
  hintText: { fontSize: 15 },
});

export default GuessHelpers;
