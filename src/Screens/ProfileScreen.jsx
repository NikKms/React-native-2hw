import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import bg from '../../assets/img/AuthBg.jpg';
import Profile from '../components/Profile';

export default function ProfileScreen() {
  return (
    <>
      <FlatList
        data={[{ key: 'profile' }]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View >
            <ImageBackground
              source={bg}>
              <View style={{ marginTop: 200 }}>
                <Profile />
              </View>
            </ImageBackground>
          </View>
        )}
      />

    </>
  );
}


