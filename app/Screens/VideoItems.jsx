import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';

const windowHeight = Dimensions.get('window').height;

const VideosItem = () => {
  // Sample video data
  const videos = [
    { id: 1, source: require('../assets/Videos/video.mp4') },
    { id: 2, source: require('../assets/Videos/video.mp4') },
    { id: 3, source: require('../assets/Videos/video2.mp4') },
  ];

  // State to handle full screen video
  const [fullScreenVideo, setFullScreenVideo] = useState(null);

  // Function to toggle full screen video
  const toggleFullScreen = (videoSource) => {
    setFullScreenVideo(videoSource);
  };

  // Render item component for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleFullScreen(item.source.uri)}>
      <View style={styles.videoContainer}>
        <Video
          source={item.source}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false} // Video won't play automatically
          style={styles.video}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      {/* Full screen video modal */}
      {fullScreenVideo && (
        <View style={styles.fullScreenContainer}>
          <Video
            source={{ uri: fullScreenVideo }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            useNativeControls
            style={styles.fullScreenVideo}
          />
          <TouchableOpacity onPress={() => setFullScreenVideo(null)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    paddingBottom: 20, // Add padding bottom to prevent videos from being cut off
  },
  videoContainer: {
    width: '100%',
    height: windowHeight / 3, // Increase the height of the videos
    marginBottom: 10, // Add margin bottom between videos
  },
  video: {
    flex: 1,
    borderRadius: 10,
  },
  fullScreenContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenVideo: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VideosItem;
