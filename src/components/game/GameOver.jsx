import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../utils/theme';

const GameOver = () => {
  return (
    <View style={styles.successContainer}>
      <Text style={styles.successMsg}>Yaaay! 😁👌</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  successMsg: { textAlign: 'center', color: COLORS.primary600, fontSize: 30 },
  successContainer: {
    backgroundColor: COLORS.gray300,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 40,
    borderRadius: 6,
  },
});

export default GameOver;
