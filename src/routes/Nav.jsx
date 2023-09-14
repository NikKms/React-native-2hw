import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNav from './AuthNav';
import MainTabs from './MainTabs';
import MapSceen from '../Screens/MapScreen';
import CommentsScreen from '../Screens/CommentsScreen';

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
        <>
          <MainStack.Screen
            name='Home'
            options={{ headerShown: false }}
            component={MainTabs}
          />
          <MainStack.Screen
            name='Map'
            options={{
              title: 'Геолокація',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderColor: '#00000028',
              },
              headerTitleStyle: {
                color: '#212121',
                fontFamily: 'Roboto-Medium',
                fontSize: 17,
              },
            }}
            component={MapSceen}
          />
          <MainStack.Screen
            name='Comment'
            options={{
              title: 'Коментарі',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderColor: '#00000028',
              },
              headerTitleStyle: {
                color: '#212121',
                fontFamily: 'Roboto-Medium',
                fontSize: 17,
              },
            }}
            component={CommentsScreen}
          />
        </>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
