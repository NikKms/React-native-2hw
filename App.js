import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

import Nav from './src/routes/Nav';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles}>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: 'transparent',
});
