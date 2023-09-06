import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserWrapper from '../components/UserWrapper';
import userAvatar from '../../assets/img/avatar.jpg';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <UserWrapper
        userAvatar={userAvatar}
        userName='Natali Romanova'
        userEmail='email@example.com'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
});
