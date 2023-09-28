import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../utils/theme';

/**
 *
 * @param {import("react").PropsWithChildren<{viewProps:import("react-native").ViewProps, textProps:import("react-native").TextProps} & import("react-native").PressableProps>} props
 * @returns
 */
const Button = (props) => {
  const { children, viewProps = {}, textProps = {}, rippleColor, ...pressableProps } = props;
  const viewStyles = useMemo(() => [defaultStyles.view, viewProps.style], [viewProps.style]);
  const textStyles = useMemo(() => [defaultStyles.text, textProps.style], [textProps.style]);

  return (
    <View style={viewStyles}>
      <Pressable
        android_ripple={{ color: rippleColor ?? COLORS.gray300 }}
        style={({ pressed }) => pressed && defaultStyles.pressedItem}
        {...pressableProps}
      >
        <Text style={textStyles}>{children}</Text>
      </Pressable>
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  view: {
    borderRadius: 6,
    elevation: 10,
    overflow: 'hidden',
  },
  text: {
    padding: 10,
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  pressedItem: { opacity: 0.5 },
});

export default Button;
