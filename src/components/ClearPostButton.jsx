import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ClearPostButton({ handleClearForm, reset }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={handleClearForm}
      >
        <FontAwesome5
          name='trash-alt'
          size={24}
          color='#BDBDBD'
          style={styles.deletIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
