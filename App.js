import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import PostsScreen from './src/Screens/PostsScreen';

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <MainStack.Navigator initialRouteName='Login'>
        <MainStack.Screen
          name='Home'
          component={PostsScreen}
        />
        <MainStack.Screen
          name='Register'
          component={RegistrationScreen}
        />
        <MainStack.Screen
          name='Login'
          component={LoginScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
    // <View
    //   onLayout={onLayoutRootView}
    //   style={styles}
    // >
    /* <PostsScreen /> */
    /* <LoginScreen /> */
    /* <RegistrationScreen /> */
    // </View>
  );
}

const styles = StyleSheet.create({
  flex: 1,
});
