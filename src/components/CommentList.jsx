import React from 'react';
import { FlatList } from 'react-native';
import Comment from './Comment';

export default function CommentList({ commentList }) {
  return (
    <FlatList
      data={commentList}
      keyExtractor={comment => comment.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Comment
          comment={item.text}
          date={item.date}
        />
      )}
    />
  );
}
