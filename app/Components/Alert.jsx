import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Alert = ({ onClose }) => {
  return (
    <View style={styles.overlay}>
        <View  style={styles.alertContainer}>
      {/* Smiling Star Icon */}
      <MaterialCommunityIcons name="star-face" size={100} color="#FFD700" style={styles.icon} />
      {/* Thank You Message */}
      <Text style={styles.message}>Thank you for your support!</Text>
      <Text color='#8D8D8D'>"People like you are who makes this production possible!"</Text>
      {/* Social Icons */}
      <View style={styles.socialIcons}>
        <Ionicons name="logo-facebook" size={40} color="#3b5998" style={styles.socialIcon} />
        <Ionicons name="logo-whatsapp" size={40} color="#25d366" style={styles.socialIcon} />
        <Ionicons name="logo-instagram" size={40} color="#bc2a8d" style={styles.socialIcon} />
        
      </View>
      {/* Okay Button */}
      <TouchableOpacity onPress={onClose} style={styles.okayButton}>
        <Text style={styles.okayButtonText}>Okay</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      alertContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
  icon: {
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#363636'
  },
  socialIcons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
   okayButton : {
    borderWidth: 1,
    borderColor: '#FF8E00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  okayButtonText: {
    color: '#FF8E00',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Alert;
