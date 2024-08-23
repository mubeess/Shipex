import React, {useState} from 'react';

import AppNavigation from '@shipex/navigation/AppNavigation';
import AnimaatedSplashScreen from '@shipex/screens/SplashScreen/AnimatedSplashScreen';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible ? (
        <AnimaatedSplashScreen
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      ) : (
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <AppNavigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      )}

      <Toast />
    </>
  );
}
