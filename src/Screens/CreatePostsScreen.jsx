import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CreatePostForm from '../components/CreatePostForm';

export default function CreatePostsScreen() {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);

  const startCamera = async () => {
    setIsCameraActive(true);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      bounces={false}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-150}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <CreatePostForm />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
  },
});
