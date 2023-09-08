import { Image, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import ava from '../../assets/img/avatar.jpg';

export default function Avatar({ avatarProfile }) {
  const [avatar, setAvatar] = useState(null || avatarProfile);

  const toggleAddAva = () => {
    setAvatar(prevAvatar => (prevAvatar ? null : ava));
  };

  return (
    <View style={styles.photoContainer}>
      {avatar && (
        <Image
          source={avatar}
          style={styles.avaImg}
        />
      )}

      <View style={styles.iconWrapper}>
        {avatar ? (
          <View style={styles.iconBackground}>
            <AntDesign
              name='closecircleo'
              size={25}
              color='#BDBDBD'
              onPress={toggleAddAva}
            />
          </View>
        ) : (
          <AntDesign
            name='pluscircleo'
            size={25}
            color='#FF6C00'
            onPress={toggleAddAva}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    position: 'absolute',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    zIndex: 10,
  },

  avaImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  iconWrapper: {
    position: 'absolute',
    zIndex: 20,
    bottom: 15,
    right: -12.5,
  },

  iconBackground: {
    borderRadius: 100,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
