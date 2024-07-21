import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


type ItemType = {
  id: string;
  name: string;
  avatar: string;
  description?: string;
};

const SearchScreen = () => {
  const { colors } = useTheme();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    { id: '1', name: 'bella_hadid', avatar: 'https://images.pexels.com/photos/10147934/pexels-photo-10147934.jpeg', description: 'Fashion Icon & Supermodel' },
    { id: '2', name: 'kylie_jenner', avatar: 'https://images.pexels.com/photos/10210430/pexels-photo-10210430.jpeg', description: 'Beauty Mogul & Entrepreneur' },
    { id: '3', name: 'chiara_ferragni', avatar: 'https://images.pexels.com/photos/21430948/pexels-photo-21430948/free-photo-of-a-man-holding-a-camera.jpeg', description: 'Digital Entrepreneur & Blogger' },
    { id: '4', name: 'huda_beauty', avatar: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg', description: 'Makeup Artist & Beauty Blogger' },
    { id: '5', name: 'nash_grier', avatar: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg', description: 'Social Media Star & Actor' },
    { id: '6', name: 'amanda_cerny', avatar: 'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg', description: 'Fitness Expert & Model' },
    { id: '7', name: 'lele_pons', avatar: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg', description: 'Comedian & Actress' },
    { id: '8', name: 'liza_koshy', avatar: 'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg', description: 'YouTuber & Actress' },
    { id: '9', name: 'zach_king', avatar: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg', description: 'Digital Magician & Filmmaker' },
    { id: '10', name: 'dan_bilzerian', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg', description: 'Professional Poker Player' },
    { id: '11', name: 'camila_coelho', avatar: 'https://images.pexels.com/photos/1231236/pexels-photo-1231236.jpeg', description: 'Fashion & Beauty Blogger' },
    { id: '12', name: 'shay_mitchell', avatar: 'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg', description: 'Actress & Lifestyle Blogger' },
    { id: '13', name: 'hudabeauty', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', description: 'Top Beauty Influencer' },
    { id: '14', name: 'zoella', avatar: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg', description: 'Vlogger & Beauty Guru' },
    { id: '15', name: 'nikkietutorials', avatar: 'https://images.pexels.com/photos/2379001/pexels-photo-2379001.jpeg', description: 'Makeup Artist & YouTuber' }
  ]);
  

  const renderSearchResult = ({ item }: { item: ItemType }) => (
    <TouchableOpacity style={styles(colors).resultItem}>
      <Image source={{ uri: item.avatar }} style={styles(colors).avatar} />
      <View>
        <Text style={styles(colors).name}>{item.name}</Text>
        <Text style={styles(colors).description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles(colors).container}>
      <View style={styles(colors).searchBar}>
        <Icon name="search" size={20} color={colors.text} />
        <TextInput
          style={styles(colors).searchInput}
          placeholder="Search"
          placeholderTextColor={colors.text}
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity onPress={() => setQuery('')}>
          <Icon name="close" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResults.filter(item => item.name.includes(query))}
        keyExtractor={(item) => item.id}
        renderItem={renderSearchResult}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    marginLeft: 10,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: colors.placeholder,
    fontSize: 14,
  },
});

export default SearchScreen;
