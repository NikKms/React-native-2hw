import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNav from './AuthNav';
import MainTabs from './MainTabs';

const MainStack = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='AuthNav'>
        <MainStack.Screen
          name='AuthNav'
          options={{ headerShown: false }}
          component={AuthNav}
        />
        <MainStack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={MainTabs}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
