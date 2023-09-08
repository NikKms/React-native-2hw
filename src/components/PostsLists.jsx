import React from 'react';
import PostsItem from './PostsItem';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function PostsLists() {
  return (
    <ScrollView>
      {/* qqq.map(()=>) */}
      <PostsItem />
    </ScrollView>
  );
}
