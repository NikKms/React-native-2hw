import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import ClearPostButton from './ClearPostButton';
import CreatePostButton from './CreatePostButton';
import CreatePostPhotoWrapper from './CreatePostPhotoWrapper';
import UploadPhoto from './UploadPhoto';
import { addToData } from '../common/data';
import { v4 as uuidv4 } from 'uuid';

const baseFontSize = 16;
const screenHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
  infoPhoto: Yup.string().required("Назва обов'язкова"),
  locPhoto: Yup.string(),
});

export default function CreatePostForm() {
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 50.417323,
        longitudeDelta: 30.490069,
      };
      setLocation(coords);
    })();
  }, []);

  const handleClearForm = resetForm => {
    resetForm();
    setPhoto('');
    setLocation('');
  };

  const handleSubmitForm = values => {
    console.log('values photo', values);
    console.log('photo', photo);
    console.log('location:', location);
    addToData({
      photo,
      postName: values.infoPhoto,
      location: values.locPhoto,
    });
  };

  return (
    <Formik
      initialValues={{
        infoPhoto: '',
        locPhoto: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (location) {
          values.location = location;
        }
        handleSubmitForm(values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched, resetForm }) => (
        <View style={styles.container}>
          <View>
            <View style={styles.imageContainer}>
              {photo ? (
                <Image
                  source={{ uri: photo }}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <CreatePostPhotoWrapper setPhoto={setPhoto} />
              )}
            </View>

            <UploadPhoto setPhoto={setPhoto} />
          </View>

          <View style={styles.formField}>
            <TextInput
              style={styles.formInput}
              placeholder='Назва...'
              onChangeText={handleChange('infoPhoto')}
              value={values.infoPhoto}
            />
            {touched.infoPhoto && errors.infoPhoto ? (
              <Text style={{ color: 'red' }}>{errors.infoPhoto}</Text>
            ) : null}
            <View style={styles.locWrapper}>
              <Ionicons
                name='location-outline'
                size={baseFontSize * 1.5}
                color='#BDBDBD'
                style={styles.locIcon}
              />
              <TextInput
                style={[styles.formInput, styles.locInput]}
                placeholder='Місцевість'
                onChangeText={handleChange('locPhoto')}
                value={values.locPhoto}
              />
            </View>
          </View>

          <View
            style={{
              gap: screenHeight * 0.06,
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <CreatePostButton
                photo={photo}
                values={values.infoPhoto}
                location={values.locPhoto}
                handleSubmit={handleSubmit}
              />
            </View>
            <View>
              <ClearPostButton
                handleClearForm={() => handleClearForm(resetForm)}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: screenHeight * 0.03,
    paddingVertical: screenHeight * 0.04,
    flex: 1,
  },
  imageContainer: {
    overflow: 'hidden',
    height: screenHeight * 0.35,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    overflow: 'hidden',
  },
  formField: {
    gap: screenHeight * 0.01,
  },
  formInput: {
    width: '100%',
    paddingVertical: screenHeight * 0.01,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
  },

  locWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locIcon: {
    position: 'absolute',
    left: 0,
  },
  locInput: {
    paddingLeft: 28,
  },
});
