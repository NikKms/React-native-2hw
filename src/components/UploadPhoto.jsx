import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Loader from './Loader';

export default function UploadPhoto({ setPhoto, setLoadedPhoto, loadedPhoto }) {
  const [uploadPhoto, setUploadPhoto] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === false) {
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setLoadedPhoto(true)
        setPhoto(result.assets[0].uri);
        setUploadPhoto(true);
      }
    } catch (error) {
      error.message
    } finally { setLoadedPhoto(false) }
  }




  return (
    <View >
      {!loadedPhoto ? <TouchableOpacity
        style={{ marginTop: 8 }}
        onPress={pickImage}
      >
        <Text style={{ color: '#BDBDBD' }}>
          {uploadPhoto ? 'Редагувати фото' : 'Завантажте фото'}
        </Text>
      </TouchableOpacity> : <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "row", gap: 8, marginTop: 16 }}>
        <Loader size={20} color={'orange'} />
        <Text style={{ color: 'orange' }}>Завантаження....</Text>
      </View>}
    </View>
  );
}
