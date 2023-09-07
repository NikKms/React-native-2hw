import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import uplPhoto from '../../assets/img/postPhoto.jpg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const baseFontSize = 16;
const screenHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
  infoPhoto: Yup.string().required("Назва обов'язкова"),
  locPhoto: Yup.string(),
});

export default function CreatePostForm() {
  const [uploadPhoto, setUploadPhoto] = useState(null);

  const handleUploadPhoto = () => {
    setUploadPhoto(prevPhoto => (prevPhoto ? null : uplPhoto));
  };

  const handleClearForm = resetForm => {
    setUploadPhoto(null);
    resetForm();
  };

  const handleSubmitForm = values => {
    console.log('values photo', values);
  };

  return (
    <Formik
      initialValues={{
        infoPhoto: '',
        locPhoto: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmitForm(values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched, resetForm }) => (
        <View style={styles.container}>
          <TouchableOpacity onPress={handleUploadPhoto}>
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

          <TouchableOpacity
            style={[
              styles.btn,
              (!uploadPhoto || !values.infoPhoto) && styles.btnDisabled,
            ]}
            disabled={!uploadPhoto || !values.infoPhoto}
            onPress={handleSubmit}
          >
            <Text
              style={[
                styles.btnText,
                (!uploadPhoto || !values.infoPhoto) && styles.btnTextDisabled,
              ]}
            >
              Зберегти
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => {
              handleClearForm(resetForm);
            }}
          >
            <FontAwesome5
              name='trash-alt'
              size={baseFontSize * 1.5}
              color='#BDBDBD'
              style={styles.deletIcon}
            />
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: screenHeight * 0.015,
    gap: screenHeight * 0.04,
  },
  photoContainer: {
    height: screenHeight * 0.3,
    marginBottom: screenHeight * 0.02,
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
  btnDisabled: {
    backgroundColor: '#F6F6F6',
  },
  btn: {
    backgroundColor: '#FF6C00',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  btnText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  btnTextDisabled: {
    color: '#BDBDBD',
  },
  deleteBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: screenHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
