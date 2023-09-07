import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <CreatePostForm />
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
