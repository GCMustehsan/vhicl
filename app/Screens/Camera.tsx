import React, { useState, useRef, useEffect } from 'react';
import { Camera, useCameraPermissions, CameraType, CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');  // Use CameraType as a type annotation
  const [permission, requestPermission] = useCameraPermissions();
  const [microphonePermission, setMicrophonePermission] = useState<boolean | null>(null);
  const [capturedVideo, setCapturedVideo] = useState<string | null>(null);
  const cameraRef = useRef<any>(null);  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestMicrophonePermissionsAsync();
      setMicrophonePermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (permission && !permission.granted) {
      console.log('Camera permission was denied');
    }
  }, [permission]);

  if (!permission || microphonePermission === null) {
    // Permissions are still loading.
    return <View />;
  }

  if (!permission.granted || !microphonePermission) {
    // Permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to show the camera and record audio</Text>
        <Button onPress={requestPermission} title="Grant Camera Permission" />
        <Button
          onPress={async () => {
            const { status } = await Camera.requestMicrophonePermissionsAsync();
            setMicrophonePermission(status === 'granted');
          }}
          title="Grant Microphone Permission"
        />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function startRecording() {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.recordAsync();
      setCapturedVideo(uri);
    }
  }

  async function stopRecording() {
    try {
      if (cameraRef.current) {
        await cameraRef.current.stopRecording();
        setCapturedVideo(null);
      }
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  }

  function handleSave() {
    // Implement logic to save the captured video
    if (capturedVideo) {
      MediaLibrary.saveToLibraryAsync(capturedVideo);
      alert('Video saved successfully!');
      setCapturedVideo(null);
    }
  }

  function handleDiscard() {
    stopRecording();
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera}  facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Ionicons name="camera-reverse-outline" size={24} color="white" />
          </TouchableOpacity>
          {!capturedVideo ? (
            <TouchableOpacity style={styles.button} onPress={startRecording}>
              <Text style={styles.text}>Start Recording</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleSave}>
                <Text style={styles.text}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleDiscard}>
                <Text style={styles.text}>Discard</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  camera: {
    width: windowWidth,
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FF8A00',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
