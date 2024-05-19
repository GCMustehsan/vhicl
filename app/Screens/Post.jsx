import React from 'react';
import { View, Text,  StyleSheet, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomNavigation from '../Components/BottomNavigation';
const windowWidth = Dimensions.get('window').width;

const onRecord=()=>{
  router.push('/Screens/Camera')
}
const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="share-alt" size={24} color="white" style={styles.icon} />
        <Text style={styles.headerText}>Share Your Vision</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.boxContainer}>
          <AntDesign name="upload" size={32} color="#C4C4C4" style={styles.uploadIcon} />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onRecord}>
              <View style={styles.recordButton} >
                <FontAwesome name="video-camera" size={16} color='#FF8A00' style={styles.recordIcon} />
                <Text style={styles.buttonText1} >Record</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
           
                <Text style={styles.Upload}>Upload</Text>
            
            </TouchableOpacity>
          </View>
        </View>
        <TextInput placeholder='Idea Title Here' style={styles.textInputIdea}></TextInput>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          placeholder="Start writing about idea..."
        />
        <TouchableOpacity style={styles.buttonContainerPost}>
        <Text style={styles.buttonTextPost}>Post</Text>
      </TouchableOpacity>
      </ScrollView>
      <BottomNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: windowWidth,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    width:windowWidth,
    alignItems: 'center',
    backgroundColor: '#FF8A00',
    padding: 10,
    marginBottom: 14,
  },
  icon: {
    marginRight: 8,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 15,
  },
  boxContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxLabel: {
    fontSize: 14,
    color: '#3B3B3B',
    marginBottom: 10,
  },
  textInputIdea: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    
  },
  textInput: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    textAlignVertical: 'top', // Align text vertically in the input
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadIcon: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  recordButton: {
    borderWidth:1,
    borderColor: '#FF8A00',
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#FF8A00'
  },
  recordIcon: {
    marginRight: 5,
  },
  buttonText1: {
    color:'#FF8A00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Upload: {
    backgroundColor:'#FF8A00',
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
  buttonContainerPost: {
    backgroundColor: '#FF8A00',
    alignItems: 'center',
    paddingVertical:10,
    marginTop:80,
    marginBottom: 20, // Add margin bottom to separate from the paragraph
  },
  buttonTextPost:{
    fontSize: 16,
    color:"white",
  }
});

export default Post;