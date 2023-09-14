import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import { data } from '../common/data';
import CommetsInput from '../components/CommetsInput';
import CommentList from '../components/CommentList';

const screenHeight = Dimensions.get('window').height;

export default function CommentsScreen({ route }) {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');

  const { params } = route;
  const { postId } = params;

  const postArr = data.find(({ id }) => id === postId);

  const handleComment = text => {
    setCommentList(prevData => [
      ...prevData,
      { id: Math.random(), text, date: Date() },
    ]);
    setComment('');
  };

  console.log('comments:', commentList);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
      style={styles.av}
    >
      <FlatList
        data={[{ key: 'comments' }]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.imgContainer}>
              <Image
                source={postArr.photo}
                style={styles.img}
              />
            </View>

            <CommentList commentList={commentList} />
          </View>
        )}
      />
      <CommetsInput
        setComment={setComment}
        comment={comment}
        handleComment={handleComment}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  av: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  imgContainer: {
    height: screenHeight * 0.3,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  img: { width: '100%', height: '100%', borderRadius: 8 },
});
