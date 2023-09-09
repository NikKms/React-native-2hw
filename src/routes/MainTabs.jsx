import 'react-native-gesture-handler';
import PostsScreen from '../Screens/PostsScreen';
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LogOutIcon from '../components/LogOutIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AntDesign,
  Feather,
  SimpleLineIcons,
  Ionicons,
} from '@expo/vector-icons';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const screenHeight = Dimensions.get('window').height;

export default function MainTabs() {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName='PostsScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const { name } = route;

          const renderIcon = (iconName, IconComponent) => (
            <View style={[styles.icon, focused ? styles.focusedIcon : null]}>
              <IconComponent
                name={iconName}
                size={24}
                color={focused ? '#fff' : '#212121ba'}
              />
            </View>
          );

          switch (name) {
            case 'PostsScreen':
              return renderIcon('grid', SimpleLineIcons);
            case 'CreatePostsScreen':
              return renderIcon('plus', AntDesign);
            case 'ProfileScreen':
              return renderIcon('user', Feather);
            default:
              return null;
          }
        },
        tabBarLabel: '',
        tabBarStyle: {
          paddingVertical: 9,
          height: screenHeight * 0.085,
        },
      })}
    >
      <Tabs.Screen
        name='PostsScreen'
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

      <Tabs.Screen
        name='CreatePostsScreen'
        options={{
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          tabBarStyle: { display: 'none' },
          unmountOnBlur: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons
                name='arrow-back'
                size={24}
                color='#212121CC'
              />
            </TouchableOpacity>
          ),
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
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        name='ProfileScreen'
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 20,
    padding: 5,
  },
  focusedIcon: {
    backgroundColor: '#FF6C00',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
