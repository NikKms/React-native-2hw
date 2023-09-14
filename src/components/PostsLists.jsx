import React from 'react';
import { FlatList } from 'react-native';
import PostsItem from './PostsItem';
import { data } from '../common/data';
import { useNavigation } from '@react-navigation/native';

export default function PostsList() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <PostsItem
          countComents={item.countComents}
          countLikes={item.countLikes}
          likes={item.likes}
          photo={item.photo}
          location={item.location}
          postName={item.postName}
          id={item.id}
          toComments={() => {
            navigation.navigate('Comment', { postId: item.id });
          }}
          toMap={() => {
            navigation.navigate('Map', item);
          }}
        />
      )}
    />
  );
}
