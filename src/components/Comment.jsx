import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import avatar from '../../assets/img/avatar.jpg';

export default function Comment({ comment, date }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ownerComment}>
        <Image
          source={avatar}
          style={styles.ava}
        />
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.text}>{comment}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    gap: 16,
    flexDirection: 'row-reverse',
    marginBottom: 24,
  },
  ownerComment: { justifyContent: 'flex-end' },
  ava: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  commentContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    padding: 12,
    gap: 12,
  },
  text: {
    color: '#212121',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  date: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
  },
});
