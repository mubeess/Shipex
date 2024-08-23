import {ReactElement} from 'react';
import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export type TextProps = {
  style?: TextStyle | TextStyle[];
  children?: string;
  numberOfLines?: number;
};

export type ButtonProps = {
  IconRight?: ReactElement;
  IconLeft?: ReactElement;
  isLoading?: boolean;
  onPress?: () => void;
  label: string;
  style?: ViewStyle;
  disabled?: boolean;
  backgroundColor?: string;
  pale?: boolean;
  fontColor?: string;
};

export interface AuthInputProps extends TextInputProps {
  label?: string;
  value?: string;
  error?: string;
  InputContainerStyle?: ViewStyle;
}
