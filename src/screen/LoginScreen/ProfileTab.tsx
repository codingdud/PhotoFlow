import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import POSTS from '../../assets/data/post';
import PostList from '../../components/PostList';

const ProfileScreen = () => {
  const { colors } = useTheme();
  const [error, setError] = useState(false);

  const renderHeader = () => (
    <>
      <View style={styles.topSection}>
        <Image 
          style={styles.profilePicture} 
          source={!error ? { uri: 'https://i.ibb.co/0CnTCGk/image.png' } : require('../../assets/images/Vector.png')} 
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
    <ScrollView contentContainerStyle={styles.container}>
      {renderHeader()}
      <PostList posts={POSTS} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 50,
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
    justifyContent: 'flex-start',
    padding: 10,
  },
  bioText: {
    fontSize: 16,
    textAlign: 'left',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;
