import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';

const MainStack = createStackNavigator();

export default function AuthNav() {
  return (
    <MainStack.Navigator initialRouteName='Login'>
      <MainStack.Screen
        name='Login'
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <MainStack.Screen
        name='Register'
        options={{ headerShown: false }}
        component={RegistrationScreen}
      />
    </MainStack.Navigator>
  );
}
