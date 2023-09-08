import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import ClearPostButton from './ClearPostButton';
import CreatePostButton from './CreatePostButton';
import CreatePostPhotoWrapper from './CreatePostPhotoWrapper';

const baseFontSize = 16;
const screenHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
  infoPhoto: Yup.string().required("Назва обов'язкова"),
  locPhoto: Yup.string(),
});

export default function CreatePostForm() {
  const [uploadPhoto, setUploadPhoto] = useState(null);

  const handleUploadPhoto = newPhoto => {
    setUploadPhoto(prevPhoto => (prevPhoto ? null : newPhoto));
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
          <View>
            <CreatePostPhotoWrapper
              handleUploadPhoto={handleUploadPhoto}
              uploadPhoto={uploadPhoto}
            />
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
                uploadPhoto={uploadPhoto}
                values={values.infoPhoto}
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
