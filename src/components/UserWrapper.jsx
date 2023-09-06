import { Image, StyleSheet, Text, View } from 'react-native';

export default function UserWrapper({ userAvatar, userName, userEmail }) {
  return (
    <View style={styles.container}>
      <Image
        source={userAvatar}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text.name}>{userName}</Text>
        <Text style={styles.text.email}>{userEmail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
  },
  text: {
    name: {
      color: '#212121',
      textAlign: 'left',
      fontSize: 15,
      fontFamily: 'Roboto-Medium',
    },
    email: {
      color: 'rgba(33, 33, 33, 0.80)',
      textAlign: 'left',
      fontSize: 13,
      fontFamily: 'Roboto-Regular',
    },
  },
  textContainer: {
    flexDirection: 'column',
  },
});
