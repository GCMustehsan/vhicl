import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SidebarProfile = () => {
    const drawerRef = useRef(null);

    const openDrawer = () => {
        drawerRef.current.openDrawer();
    };

    return (
        <View style={styles.container}>
            {/* Hamburger Icon */}
            <TouchableOpacity onPress={openDrawer} style={styles.hamburger}>
                <Ionicons name="menu" size={24} color="black" style={styles.hamburgerIcon} />
            </TouchableOpacity>
           
            <DrawerLayoutAndroid
                ref={drawerRef}
                drawerWidth={240}
                drawerPosition="left" // Change drawer position to left
                renderNavigationView={() => (
                    <View style={styles.drawer}>
                        {/* Profile Information */}
                        <View style={styles.profileInfo}>
                            <Image source={require('../assets/Images/profile.png')} style={styles.profilePicture} />
                            <View style={styles.profileText}>
                                <Text style={styles.welcomeText}>Welcome Back,</Text>
                                <Text style={styles.username}>Eva Aderson</Text>
                            </View>
                        </View>
                        {/* Navigation */}
                        <View style={styles.navigation}>
                            <TouchableOpacity style={styles.navItem}>
                                <Ionicons name="briefcase" size={20} color="#8A8A8A" style={styles.navIcon} />
                                <Text style={styles.navText}>Jobs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.navItem}>
                                <Ionicons name="cart" size={20} color="#8A8A8A" style={styles.navIcon} />
                                <Text style={styles.navText}>Pre Buy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.navItem}>
                                <Ionicons name="bulb" size={20} color="#8A8A8A" style={styles.navIcon} />
                                <Text style={styles.navText}>Pre Production Ideas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.navItem}>
                                <Ionicons name="heart" size={20} color="#8A8A8A" style={styles.navIcon} />
                                <Text style={styles.navText}>Favourite</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.navItem}>
                                <Ionicons name="mail" size={20} color="#8A8A8A" style={styles.navIcon} />
                                <Text style={styles.navText}>Messages</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.navItem}>
                                <Ionicons name="card" size={20} color="#8A8A8A" style={styles.navIcon} />
                                <Text style={styles.navText}>Add Payment Card</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Logout Link */}
                        <TouchableOpacity style={styles.logout}>
                            <Ionicons name="log-out" size={20} color="#8A8A8A" style={styles.navIcon} />
                            <Text style={styles.navText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                )}
            >
            </DrawerLayoutAndroid>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawer: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 50, // Adjust top margin to avoid overlapping with the status bar
        marginBottom: 20,
        backgroundColor:'#FF8A00'
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    profileText: {
        justifyContent: 'center',
       
    },
    welcomeText: {
        fontSize: 14,
        color:'white'
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
    },
    navigation: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    navIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    navText: {
        fontSize: 16,
        color:"#8A8A8A"
    },
    logout: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 150,
    },
    hamburger: {
        marginTop: 10,
    },
    hamburgerIcon: {
        width: 30,
        height: 30,
    },
});

export default SidebarProfile;
