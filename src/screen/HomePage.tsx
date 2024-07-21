import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import POSTS from '../assets/data/post';
import PostList from './LoginScreen/StackAnimation';

const DummyPost = [
    { id: '1', uri: 'https://images.pexels.com/photos/10147934/pexels-photo-10147934.jpeg', userName: 'NatureLover', caption: 'Beautiful nature scenery' },
    { id: '2', uri: 'https://images.pexels.com/photos/10210430/pexels-photo-10210430.jpeg', userName: 'AdventureSeeker', caption: 'Exploring new places' },
    { id: '3', uri: 'https://images.pexels.com/photos/21430948/pexels-photo-21430948/free-photo-of-a-man-holding-a-camera.jpeg', userName: 'ShutterBug', caption: 'Capturing moments' },
    { id: '4', uri: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg', userName: 'CatWhisperer', caption: 'Cute cat picture' },
    { id: '5', uri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg', userName: 'SunsetChaser', caption: 'Stunning sunset view' },
  ];

const DummyStory = [
    { id: '1', uri: 'https://images.pexels.com/photos/10147934/pexels-photo-10147934.jpeg', userName: 'NatureLover' },
    { id: '2', uri: 'https://images.pexels.com/photos/10210430/pexels-photo-10210430.jpeg', userName: 'AdventureSeeker' },
    { id: '3', uri: 'https://images.pexels.com/photos/21430948/pexels-photo-21430948/free-photo-of-a-man-holding-a-camera.jpeg', userName: 'ShutterBug' },
    { id: '4', uri: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg', userName: 'CatWhisperer' },
    { id: '5', uri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg', userName: 'SunsetChaser' },
    { id: '6', uri: 'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg', userName: 'Foodie' },
    { id: '7', uri: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg', userName: 'MountainMan' },
    { id: '8', uri: 'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg', userName: 'BeachBum' },
    { id: '9', uri: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg', userName: 'FitnessFreak' },
    { id: '10', uri: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg', userName: 'CityExplorer' },
  ];

export default function HomeScreen() {
    const {colors} = useTheme();
  return (
    <ScrollView style={{ flex: 1, backgroundColor:colors.background}}>
      {/* Top Story Section */}
      <ScrollView horizontal style={{ flexDirection: 'row', padding: 10 }}>
        {/* Dummy Profiles */}
        {DummyStory.map((item, index) => (
        <View key={item.id} style={{ marginRight: 10 }}>
          <Image
            source={{ uri: item.uri }}
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: 'gray',
              }}
          />
          <Text style={{ color: colors.text, textAlign: 'center' }}> {item.userName}</Text>
        </View>
      ))}
      </ScrollView>

      {/* Posts Section */}
      <View style={{ padding: 10 }}>
      {DummyPost.map((item, index) => (
        <View key={item.id} style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image
              source={{ uri: item.uri }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'gray',
                marginRight: 10,
              }}
            />
            <Text style={{ color:colors.text }}>{item.userName}</Text>
          </View>
          <Image
            source={{ uri: item.uri }}
            style={{
              width: '100%',
              height: 400,
              backgroundColor: 'gray',
            }}
          />
          <Text style={{ color:colors.text, marginTop: 10 }}>{item.caption}</Text>
        </View>
      ))}
    </View>

      {/* Profile Suggestions Section */}
      <View style={{ padding: 10 }}>
        {/* Dummy Profile Suggestions */}
        <Text style={{ color: colors.text, marginBottom: 10 }}>Suggestions for you</Text>
        {DummyStory.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image
            source={{ uri: item.uri }}
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'gray',
                marginRight: 10,
              }}
          />
            <Text style={{ color: colors.text}}> {item.userName}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
