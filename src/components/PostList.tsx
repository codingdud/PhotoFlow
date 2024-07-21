import React from 'react';
import { Image, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  SharedValue,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.7;
const CARD_HEIGHT = SCREEN_HEIGHT * 0.5;
const CARD_GAP = -60;

interface Post {
  id: string;
  imageUrl: string;
  title: string;
}

interface PostCardProps {
  post: Post;
  index: number;
  scrollX: SharedValue<number>;
}

const PostCard: React.FC<PostCardProps> = ({ post, index, scrollX }) => {
  const { colors } = useTheme();
  
  const inputRange = [
    (index - 1) * (CARD_WIDTH + CARD_GAP),
    index * (CARD_WIDTH + CARD_GAP),
    (index + 1) * (CARD_WIDTH + CARD_GAP),
  ];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolation.CLAMP
    );
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [30, 0, 30],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.6, 1, 0.6],
      Extrapolation.CLAMP
    );
    const zIndex = interpolate(
      scrollX.value,
      inputRange,
      [-1, 0, -1],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ scale }, { translateY }],
      opacity,
      zIndex,
    };
  });

  return (
    <Animated.View style={[styles.card, animatedStyle, { backgroundColor: colors.card }]}>
      <Image source={{ uri: post.imageUrl }} style={styles.image} />
      <Text style={[styles.title, { color: colors.text }]}>{post.title}</Text>
    </Animated.View>
  );
};

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const scrollX = useSharedValue(0);
  const { colors } = useTheme();

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
      snapToInterval={CARD_WIDTH + CARD_GAP}
      decelerationRate="fast"
    >
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} scrollX={scrollX} />
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: CARD_GAP / 2,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default PostList;
