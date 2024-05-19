import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
const BottomNavigation = () => {
  return (
    <View style={styles.bottomNav}>
     
        <Link href='/Screens/Post' style={styles.addButton}>
           
          <Text style={styles.addButtonText}><FontAwesome name="plus" /></Text>
        </Link>
      {/* Home Icon */}
      <TouchableOpacity style={styles.navItem}>
       <Link href='/Screens/FeedScreen'> <FontAwesome name="home" style={styles.navIcon} /></Link>
        <Text style={styles.navLabel}>Home</Text>
      </TouchableOpacity>
      {/* Channel Icon */}
      
      <TouchableOpacity style={styles.navItem}>
      <Link href='/Screens/Jobs'> <FontAwesome name="tv" style={styles.navIcon} /></Link> 
      <Text style={styles.navLabel}>Channel</Text>
      </TouchableOpacity>
      
      {/* Profile Icon */}
      <TouchableOpacity style={styles.navItem}>
      <Link href='/Screens/Profile'>  <FontAwesome name="user" style={styles.navIcon} /></Link>
        <Text style={styles.navLabel}>Profile</Text>
      </TouchableOpacity>
      {/* Alerts Icon */}
      <TouchableOpacity style={styles.navItem}>
        <FontAwesome name="bell" style={styles.navIcon} />
        <Text style={styles.navLabel}>Alerts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    position: 'absolute',
    bottom: 60,
    left: '50%',
    transform: [{ translateX: -10 }],
    backgroundColor: '#FF8A00',
    borderRadius: 32,
    padding: 15,
    elevation: 3,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: '#C4C4C4',
  },
  navLabel: {
    fontSize: 12,
  },
});

export default BottomNavigation;
