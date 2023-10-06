import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../utils/theme';

const GuessLogItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Guess no.{index + 1} = {item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    borderRadius: 100,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  text: {
    color: COLORS.primary600,
    fontSize: 20,
  },
});

export default GuessLogItem;
