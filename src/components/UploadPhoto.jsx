import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadPhoto({ setPhoto }) {
  const [uploadPhoto, setUploadPhoto] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === false) {
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
      setUploadPhoto(true);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={{ marginTop: 8 }}
        onPress={pickImage}
      >
        <Text style={{ color: '#BDBDBD' }}>
          {uploadPhoto ? 'Редагувати фото' : 'Завантажте фото'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
