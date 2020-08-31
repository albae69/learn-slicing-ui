import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';

import DashboardStack from './DashboardStack';
import UnboardingStack from './UnbdoardingStack';
import useStateContext from '../store/useStateContext';

const Routes = () => {
  const {state} = useStateContext();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => {
  //     setLoading(false);
  //   };
  // }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {state.isLogin ? <DashboardStack /> : <UnboardingStack />}
        </NavigationContainer>
      )}
    </>
  );
};

export default Routes;
