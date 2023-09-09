import React from 'react';
import { FlatList } from 'react-native';
import PostsItem from './PostsItem';
import postPhoto from '../../assets/img/postPhoto.jpg';
import postPhoto2 from '../../assets/img/photo2.jpg';

export default function PostsList() {
  const data = [
    {
      id: 1,
      photo: postPhoto,
      countComents: 5,
      countLikes: 10,
      likes: true,
    },
    {
      id: 2,
      photo: postPhoto2,
      countComents: 3,
      countLikes: 7,
      likes: false,
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <PostsItem
          countComents={item.countComents}
          countLikes={item.countLikes}
          likes={item.likes}
          photo={item.photo}
        />
      )}
    />
  );
}
