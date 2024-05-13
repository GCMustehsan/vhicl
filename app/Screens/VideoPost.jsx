import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions,Image,Dimensions } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const VideoPost = ({ post, activePostId }) => {
  const video = useRef(null);
  const [status, setStatus] = useState();

  const isPlaying = status?.isLoaded && status.isPlaying;

  const { height } = useWindowDimensions();

  useEffect(() => {
    if (!video.current) {
      return;
    }
    if (activePostId !== post.id) {
      video.current.pauseAsync();
    }
    if (activePostId === post.id) {
      video.current.playAsync();
    }
  }, [activePostId, video.current]);

  const onPress = () => {
    if (!video.current) {
      return;
    }
    if (isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  };

  return (
    <View style={[styles.container, { height }]}>
      <Video
        ref={video}
        style={[styles.video]}
        source={{ uri: post.video }}
        resizeMode={ResizeMode.COVER}
        onPlaybackStatusUpdate={setStatus}
        isLooping
      />

      <Pressable onPress={onPress} style={styles.content}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={[StyleSheet.absoluteFillObject, styles.overlay]}
        />
        {!isPlaying && (
          <Ionicons
            style={{ position: 'absolute', alignSelf: 'center', top: '50%' }}
            name="play"
            size={70}
            color="rgba(255, 255, 255, 0.6)"
          />
        )}
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.footer}>
            {/* Profile picture */}
            

            {/* Caption and username */}
            <View style={styles.captionContainer}>
              <Text style={styles.username}>User Name</Text>
              <Text style={styles.caption}>Caption</Text>
            </View>

            {/* Icon buttons */}
            <View style={styles.iconContainer}>
            <View style={styles.profilePictureContainer}>
              <Image
                source={require('../assets/Images/profile.png')}
                style={styles.profilePicture}
              />
            </View>
              <Ionicons name="heart" size={35} color="white" style={styles.icon} />
              <Ionicons name="share-social-sharp" size={35} color="white" style={styles.icon} />
              <Ionicons name="bookmark" size={35} color="white" style={styles.icon} />
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:windowWidth
  },
  video: {
    width: '100%',
    height: '100%',
    position:'absolute'
  },
  content: {
    flex: 1,
    padding: 10,
  },
  overlay: {
    top: '50%',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
   backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 10,
  },
  profilePictureContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
    alignSelf: 'flex-start',
    marginBottom:30
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  captionContainer: {
    flex: 1,
    marginRight: 10,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  caption: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    bottom:120,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 10,
  },
});

export default VideoPost;