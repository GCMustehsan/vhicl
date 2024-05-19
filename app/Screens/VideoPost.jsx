import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions, Image, Dimensions } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import BottonNavigation from '../Components/BottomNavigation'
import { FontAwesome } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const VideoPost = ({ post, activePostId }) => {
  const video = useRef(null);
  const [status, setStatus] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikePress = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    setLikeCount((prevLikeCount) => (isLiked ? prevLikeCount - 1 : prevLikeCount + 1));
  };

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

            {/* Caption and username */}
            <View style={styles.captionContainer}>
              <Text style={styles.username}>@ Eva Aderson</Text>
              <Text style={styles.caption}>The Most Stisfying job</Text>
            </View>

            {/* Icon buttons */}
            <View style={styles.iconContainer}>
              <Pressable

                android_ripple={{ color: 'white' }}
              >
                <View style={styles.profilePictureContainer}>
                  <View style={styles.profilePictureBorder}>
                    <Image
                      source={require('../assets/Images/profile.png')}
                      style={styles.profilePicture}
                    />
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={handleLikePress} android_ripple={{ color: 'white' }}>
                <Ionicons
                  name={isLiked ? 'heart' : 'heart-outline'}
                  size={35}
                  color={isLiked ? 'red' : 'white'}
                  style={styles.icon}
                />
              </Pressable>
              <Text style={styles.likeCount}>{likeCount}</Text>
              <Pressable

                android_ripple={{ color: 'white' }}
              >
                <FontAwesome name="commenting" size={35} color="white" style={styles.icon} />
              </Pressable>
              <Pressable

                android_ripple={{ color: 'white' }}
              >
                <FontAwesome5 name="hand-holding-heart" size={35} color="white" style={styles.icon} />
              </Pressable>
              <Pressable

                android_ripple={{ color: 'white' }}
              >
                <FontAwesome5 name="share" size={35} color="white" style={styles.icon} />
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
      <BottonNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute'
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
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
  profilePictureContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 5,
    alignSelf: 'flex-start',
    marginBottom: 30
  },
  profilePictureBorder: {
    backgroundColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  plusIcon: {
    position: 'absolute',
    bottom: -8,
    right: 7,
    backgroundColor: 'red',
    borderRadius: 40,
    margin: 5,
  },
  captionContainer: {
    flex: 1,
    marginRight: 10,
    marginBottom:35
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
    bottom: 100,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 10,
    marginBottom: 10
  },
  likeCount: {
    color: 'white',
    marginLeft: 5,
    marginBottom: 10,
  },
});

export default VideoPost;