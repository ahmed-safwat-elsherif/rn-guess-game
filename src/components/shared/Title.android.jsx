import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../utils/theme';
import { FONTS } from '../../utils/fontVariants';

const Title = (props) => <Text style={styles.title} {...props} />;

const styles = StyleSheet.create({
  title: {
    color: COLORS.secondary,
    fontFamily: FONTS.Montserrat_Extra_Bold_i,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
});
export default Title;
