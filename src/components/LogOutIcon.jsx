import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function LogOutIcon() {
  const navigation = useNavigation();

  const handlleLogOut = () => {
    console.log('LOG OUT');
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Login');
        handlleLogOut();
      }}
      style={{ marginRight: 10 }}
    >
      <Feather
        name='log-out'
        size={24}
        color='#BDBDBD'
      />
    </TouchableOpacity>
  );
}
