import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, StatusBar, StyleSheet } from 'react-native';
import VideoPost from './VideoPost';
const dummyPosts = [
  {
    id: '2',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
    caption: 'Caption of the post 1',
  },
  {
    id: '1',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/1.mp4',
    caption: 'Hey there',
  },
  {
    id: '3',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/3.mp4',
    caption: 'Hola',
  },
  {
    id: '4',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/4.mp4',
    caption: 'Piano practice',
  },
  {
    id: '5',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/5.mp4',
    caption: 'Hello World!',
  },
];

const FeedScreen = () => {
  const [activePostId, setActivePostId] = useState(dummyPosts[0].id);
  const [posts, setPosts] = useState(dummyPosts);

  useEffect(() => {
    // Simulate fetching posts from the server
    const fetchPosts = async () => {
      setPosts(dummyPosts);
    };

    fetchPosts();
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: { itemVisiblePercentThreshold: 50 },
      onViewableItemsChanged: ({ viewableItems }) => {
        if (viewableItems.length > 0 && viewableItems[0].isViewable) {
          setActivePostId(viewableItems[0].item.id);
        }
      },
    },
  ]);

  const loadMorePosts = () => {
    // Simulate fetching more posts from the database
    setPosts((currentPosts) => [...currentPosts, ...dummyPosts]);
  };

  return (
    <View style={styles.container}>
       
      <FlatList
            data={posts}
            renderItem={({ item }) => (
                <VideoPost key={item.id} post={item} activePostId={activePostId} />
            )}
            keyExtractor={(item) => item.id}
            pagingEnabled
            onViewableItemsChanged={viewabilityConfigCallbackPairs.current[0].onViewableItemsChanged}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMorePosts}
            onEndReachedThreshold={0.5}
            />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default FeedScreen;
