import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import uplPhoto from '../../assets/img/postPhoto.jpg';

const screenHeight = Dimensions.get('window').height;

export default function CreatePostPhotoWrapper({
  handleUploadPhoto,
  uploadPhoto,
}) {
  return (
    <View>
      <TouchableOpacity onPress={() => handleUploadPhoto(uplPhoto)}>
        <View style={styles.photoContainer}>
          <View style={styles.bgIcon}>
            <MaterialIcons
              name='photo-camera'
              size={24}
              color={uploadPhoto ? '#FFFFFF' : '#BDBDBD'}
            />
          </View>
          {uploadPhoto && (
            <Image
              source={uploadPhoto}
              style={styles.image}
            />
          )}
        </View>
        <View style={{ backgroundColor: '#ffffff' }}>
          <Text style={{ color: '#BDBDBD' }}>
            {uploadPhoto ? 'Редагувати фото' : 'Завантажте фото'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    height: screenHeight * 0.3,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bgIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    height: 60,
    width: 60,
    borderRadius: 30,
    zIndex: 99,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
