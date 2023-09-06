import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from '../Screens/PostsScreen';
import LogOutIcon from '../components/LogOutIcon';

const MainStack = createStackNavigator();

export default function AuthorizedNavTab() {
  return (
    <MainStack.Navigator initialRouteName='Home'>
      <MainStack.Screen
        name='Home'
        options={{
          title: 'Публікації',
          headerLeft: null,
          headerTitleAlign: 'center',
          headerRight: () => <LogOutIcon />,
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
        component={PostsScreen}
      />
    </MainStack.Navigator>
  );
}
