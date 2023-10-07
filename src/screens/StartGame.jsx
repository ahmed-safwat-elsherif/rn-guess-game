import React, { useCallback, useState } from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Button from '../components/shared/Button';
import Title from '../components/shared/Title';
import { COLORS } from '../utils/theme';

const StartGame = (props) => {
  const { onChangeNumber } = props;
  const { height: deviceHeight } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleReset = useCallback(() => setEnteredNumber(''), []);

  const handleConfirm = useCallback(() => {
    const selectedNum = +enteredNumber;
    if (isNaN(selectedNum) || selectedNum <= 0 || selectedNum > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: handleReset },
      ]);
      return;
    }
    onChangeNumber(selectedNum);
  }, [handleReset, enteredNumber]);

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[
            styles.container,
            {
              marginTop: deviceHeight > 380 ? 100 : 24,
            },
          ]}
        >
          <Title>Add the number</Title>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={setEnteredNumber}
          />
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
            <Button
              rippleColor={COLORS.primary600}
              viewProps={{ style: styles.buttonView }}
              textProps={{ style: { color: 'white' } }}
              onPress={handleReset}
            >
              Reset
            </Button>
            <Button
              rippleColor={COLORS.primary600}
              viewProps={{ style: styles.buttonView }}
              textProps={{ style: { color: 'white' } }}
              onPress={handleConfirm}
            >
              Confirm
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primary600,
    borderRadius: 8,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginBottom: 10,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 2,
    color: COLORS.secondary,
    marginVertical: 8,
    fontWeight: 'bold',
    minWidth: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: COLORS.primary500,
    flex: 1,
    borderRadius: 30,
  },
});

export default StartGame;
