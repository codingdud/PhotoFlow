import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const posts = [
  { id: '1', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '2', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '3', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '4', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '5', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '6', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '7', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '8', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '9', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '10', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '11', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
  { id: '12', uri: 'https://i.ibb.co/0CnTCGk/image.png' },
];

const ProfileScreen = () => {
  const { colors } = useTheme();
  const [error, setError] = useState(false);

  const renderHeader = () => (
    <>
      <View style={styles.topSection}>
        <Image 
          style={styles.profilePicture} 
          source={!error ? {uri: 'https://i.ibb.co/0CnTCG/image.png'} : require('../assets/images/Vector.png')} 
          onError={() => setError(true)}
        />
        <View style={styles.stats}>
          <Text style={[styles.statText, { color: colors.text }]}>72</Text>
          <Text style={[styles.statLabel, { color: colors.text }]}>posts</Text>
        </View>
        <View style={styles.stats}>
          <Text style={[styles.statText, { color: colors.text }]}>591</Text>
          <Text style={[styles.statLabel, { color: colors.text }]}>followers</Text>
        </View>
        <View style={styles.stats}>
          <Text style={[styles.statText, { color: colors.text }]}>878</Text>
          <Text style={[styles.statLabel, { color: colors.text }]}>following</Text>
        </View>
      </View>
      <View style={styles.bioSection}>
        <Text style={[styles.bioText, { color: colors.text }]}>
          Gautam
        </Text>
        <Text style={[styles.bioText, { color: colors.text }]}>
          Work hard until u don't need to introduce urself 😊😊
        </Text>
      </View>
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={posts}
      numColumns={3}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Image style={styles.postImage} source={{ uri: item.uri }} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  stats: {
    alignItems: 'center',
  },
  statText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
  },
  bioSection: {
    marginVertical: 10,
    justifyContent:'flex-start',
    padding: 10,
  },
  bioText: {
    fontSize: 16,
    textAlign: 'left',
  },
  postImage: {
    width: '33%',
    height: 150,
    marginRight: 4,
  },
});

export default ProfileScreen;
