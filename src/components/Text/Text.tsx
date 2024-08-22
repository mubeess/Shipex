import {Text as AppText} from 'react-native';
import {GlobalStyle} from '../GlobalStyles';
import {TextProps} from '../types';

export default function Text({
  children,
  style,
  numberOfLines = 0,
  ...props
}: TextProps) {
  return (
    <AppText
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
      {...props}
      style={[GlobalStyle.text, style]}>
      {children}
    </AppText>
  );
}
