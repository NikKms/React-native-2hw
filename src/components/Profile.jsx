import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import LogOutIcon from './LogOutIcon';
import PostsLists from './PostsLists';
import ava from '../../assets/img/avatar.jpg';

const screenHeight = Dimensions.get('window').height;

export default function Profile() {
  return (
    <View style={styles.container}>
      <Avatar avatarProfile={ava} />
      <View style={{ alignSelf: 'flex-end' }}>
        <LogOutIcon />
      </View>
      <View>
        <Text style={styles.title}>Natali Romanova</Text>
      </View>
      <View style={{ width: '100%' }}>
        <PostsLists />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    position: 'relative',
    flex: 1,

    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  title: {
    marginTop: screenHeight * 0.08,
    fontFamily: 'Roboto-Medium',
    fontSize: screenHeight * 0.045,
    lineHeight: 35.16,
    letterSpacing: 1.17,
  },
});
