import {TextStyle} from 'react-native';

export type TextProps = {
  style?: TextStyle | TextStyle[];
  children?: string;
  numberOfLines?: number;
};
