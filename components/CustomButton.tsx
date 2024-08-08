import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface Props {
  title: string;
  handlePress?: () => any;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, isLoading && styles.disabled, containerStyles]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>

      {isLoading && (
        <ActivityIndicator animating={isLoading} color="#fff" size="small" style={styles.spinner} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6b7280',
    borderRadius: 16,
    minHeight: 62,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#f3f4f6',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: 22,
  },
  disabled: {
    opacity: 0.5,
  },
  spinner: {
    marginLeft: 8,
  },
});

export default CustomButton;
