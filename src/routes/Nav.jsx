import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNav from './AuthNav';
import AuthorizedNavTab from './AuthorizedNavTab';

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
          name='AuthorizedNavTab'
          options={{ headerShown: false }}
          component={AuthorizedNavTab}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
