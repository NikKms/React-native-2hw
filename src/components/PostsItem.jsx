import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PostsItem({
  countComents = 0,
  countLikes,
  likes,
  photo,
  location,
  postName,
  toComments,
  toMap,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={photo} /*source={{uri:photo}}*/
        style={styles.image}
      />
      <Text style={[styles.text, {}]}>{postName}</Text>
      <View style={styles.infoList}>
        <View style={styles.activityInfo}>
          <TouchableOpacity onPress={toComments}>
            <View style={styles.infoItem}>
              <Feather
                name='message-circle'
                size={24}
                color={
                  // isCommented ? '#FF6C00' :
                  '#535352d2'
                }
              />
              <Text>{countComents}</Text>
            </View>
          </TouchableOpacity>
          {likes && (
            <>
              <TouchableOpacity>
                <View style={styles.infoItem}>
                  <Feather
                    name='thumbs-up'
                    size={24}
                    color={
                      // isLiked ? '#FF6C00' :
                      '#535352d2'
                    }
                  />
                  <Text>{countLikes}</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity
          style={[styles.infoItem]}
          onPress={toMap}
        >
          <SimpleLineIcons
            name='location-pin'
            size={24}
            color='#BDBDBD'
          />
          <Text style={[styles.text, styles.loc]}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderRadius: 8,
    marginVertical: 35,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  text: {
    color: '#212121',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  loc: {
    textDecorationLine: 'underline',
  },
  infoList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityInfo: { flexDirection: 'row', gap: 14 },
  infoItem: {
    flexDirection: 'row',
    gap: 5,
  },
});
