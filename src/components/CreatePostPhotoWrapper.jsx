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
const baseFontSize = 16;

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
              size={baseFontSize * 1.5}
              color={uploadPhoto ? '#FFFFFF' : '#BDBDBD'}
            />
          </View>
          <View>
            {uploadPhoto && (
              <Image
                source={uploadPhoto}
                style={styles.image}
              />
            )}
          </View>
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
    overflow: 'hidden',
  },
  bgIcon: {
    position: 'absolute',
    top: screenHeight * 0.12,
    left: '50%',
    marginLeft: -baseFontSize * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
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
