import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av'; // Import Video from expo-av
import VideoItem from '../Screens/VideoItems';
import BottomNavigation from '../Components/BottomNavigation';
import { FontAwesome } from '@expo/vector-icons';
const Profile = () => {
  const windowWidth = Dimensions.get('window').width;
  const videos = [
    { id: 1, title: 'Video 1', thumbnailUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Video 2', thumbnailUrl: 'https://via.placeholder.com/150' },
    // Add more video data as needed
  ];
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={[styles.profileContainer, { width: windowWidth }]}>
        {/* Back Stack Icon */}
        <View style={styles.header}>
          <FontAwesome name="chevron-left" style={styles.icon} />
          {/* User Name */}
          <Text style={styles.title}>User Name</Text>
          {/* Three Dots Menu */}
          <FontAwesome name="ellipsis-v" style={styles.icon} />
        </View>
        {/* Profile Information */}
        <View style={styles.profileInfo}>
          {/* Profile Photo */}
          <View style={styles.profilePicContainer}>
            <Image source={require('../assets/Images/profile.png')} style={styles.profileImage} />
          </View>
          {/* Profile Name and Stats */}
          <View style={styles.profileDetails}>
            <Text style={styles.username}>User Name</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Followers</Text>
                <Text style={styles.statValue}>100</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Following</Text>
                <Text style={styles.statValue}>50</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Likes</Text>
                <Text style={styles.statValue}>500</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Follow and Message Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Message</Text>
          </TouchableOpacity>
        </View>
        {/* Video Grid */}
        <View style={styles.videoGrid}>
          {videos.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </View>

      </View>
      <BottomNavigation/>
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
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  profileContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF8A00',
    padding: 10,
    paddingVertical: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1, // Allow the user name to take up remaining space
    textAlign: 'center', // Center the user name
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
  
  profileInfo: {
    flexDirection: 'column', // Change flexDirection to column
    alignItems: 'center',
    marginBottom: 20,
  },
  

  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 10,
  },
  profileDetails: {
    flexGrow: 1, // Allow the container to expand to fill the available space
    justifyContent: 'center', // Center the content vertically
    width:300
  },
  
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center the username
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Align buttons evenly
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  button2: {
    borderWidth: 1,
    borderColor: '#FF8A00', // Set border color to match the desired color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#FF8A00',
    fontWeight: 'bold',
  },
  
});

export default Profile;
