import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Loader from './Loader';

const screenHeight = Dimensions.get('window').height;

const CreatePostPhotoWrapper = ({ setPhoto, setLoadedPhoto, loadedPhoto }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync({
        quality: 0.3,
      });

      try {
        setLoadedPhoto(true)
        await MediaLibrary.createAssetAsync(uri);
        setPhoto(uri);
      } catch (error) {
        error.messame
      } finally { setLoadedPhoto(false) }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (
    <View style={styles.container}>
      {!loadedPhoto
        ? <Camera
          style={styles.camera}
          type={type}
          ref={setCameraRef}
        >
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={flipCamera}
          >
            <Ionicons
              name='camera-reverse'
              size={24}
              color='white'
            />
          </TouchableOpacity>
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.button}
              onPress={takePhoto}
            >
              <View style={styles.takePhotoInner}>
                <MaterialIcons
                  name='photo-camera'
                  size={24}
                  color='#BDBDBD'
                />
              </View>
            </TouchableOpacity>
          </View>
        </Camera> : <>
          <Loader size={84} color={'black'} />
          <Text>Завантаження....</Text>
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: "#E8E8E8"
  },
  camera: {
    flex: 1,
    height: screenHeight * 0.3,
    width: '100%',
    padding: 12,
  },
  photoView: {
    flex: 0.9,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipContainer: {
    alignSelf: 'flex-end',
  },
  button: {
    alignSelf: 'center',
  },
  takePhotoInner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

export default CreatePostPhotoWrapper;



