import React, {useState} from 'react';

import AppNavigation from '@shipex/navigation/AppNavigation';
import AnimaatedSplashScreen from '@shipex/screens/SplashScreen/AnimatedSplashScreen';

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
        <AppNavigation />
      )}
    </>
  );
}
