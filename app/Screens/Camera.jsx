import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedVideo, setCapturedVideo] = useState(null);
  const cameraRef = useRef();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function startRecording() {
    const { uri } = await cameraRef.current.recordAsync();
    setCapturedVideo(uri);
  }

  async function stopRecording() {
    try {
      await cameraRef.current.stopRecording();
      setCapturedVideo(null);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  }

  function handleSave() {
    // Implement logic to save the captured video
    alert('Video saved successfully!');
    setCapturedVideo(null);
  }

  function handleDiscard() {
    stopRecording();
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
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
