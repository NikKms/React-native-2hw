import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CreatePostButton({
  photo,
  values,
  handleSubmit,
  location,
}) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.btn,
          (!photo || !values || !location) && styles.btnDisabled,
        ]}
        disabled={!photo || !values || !location}
        onPress={() => {
          handleSubmit();
          navigation.navigate('PostsScreen');
          console.log('Add to flat list in PostScreens');
        }}
      >
        <Text
          style={[
            styles.btnText,
            (!photo || !values || !location) && styles.btnTextDisabled,
          ]}
        >
          Зберегти
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnDisabled: {
    backgroundColor: '#F6F6F6',
  },
  btn: {
    backgroundColor: '#FF6C00',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  btnText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  btnTextDisabled: {
    color: '#BDBDBD',
  },
});
