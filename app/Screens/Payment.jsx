import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput,  ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../Components/BottomNavigation'
import Alert from '../Components/Alert';
const windowWidth = Dimensions.get('window').width;

const AddPaymentCardScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const handleConfirm = () => {
    // Perform any necessary actions before showing the alert
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    // Close the alert
    setShowAlert(false);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Credit Card Icon */}
        <Ionicons name="card" size={24} color="white" style={styles.headerIcon} />
        <Text style={styles.headerText}>Add Payment Card</Text>
      </View>
      <View style={styles.paymentContainer}>
        <View style={styles.cardContainer}>
          <Image source={require('../assets/Images/card.png')} style={styles.cardImage} />
          <View style={styles.cardDetailsContainer}>
            <Text style={styles.inputLabel}>Card holder name</Text>
            <TextInput
              style={styles.cardDetailInput}
              placeholder="Card holder name"
              value={cardHolderName}
              onChangeText={setCardHolderName}
            />
            <Text style={styles.inputLabel}>Card number</Text>
            <TextInput
              style={styles.cardDetailInput}
              placeholder="Card number"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
            <View style={styles.dateCvvContainer}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Expiration date</Text>
                <TextInput
                  style={styles.dateCvvInput}
                  placeholder="MM/YY"
                  value={expirationDate}
                  onChangeText={setExpirationDate}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>CVV</Text>
                <TextInput
                  style={styles.dateCvvInput}
                  placeholder="CVV"
                  value={cvv}
                  onChangeText={setCvv}
                />
              </View>
            </View>
          </View>
        </View>
        </View>
      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      <BottomNavigation/>
      {showAlert && <Alert onClose={handleAlertClose} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent:'center'
  },
  header: {
    backgroundColor: '#FF8A00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: windowWidth,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerIcon: {
    marginRight: 10,
  },
  paymentContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent:'center',
    marginTop:20
  },
  cardContainer: {
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  },
  cardImage: {
    width: windowWidth-60,
    height: 170,
    borderRadius: 5,
    marginRight: 20,
    marginBottom:60
  },
  cardDetailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardDetailInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: windowWidth-60,
  },
  dateCvvContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    width: '50%', 
  },
  dateCvvInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '60%',
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 14,
    color: 'black',
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingVertical: 5,
    marginTop: 2,
    marginBottom:130,
    alignItems: 'center',
    width:windowWidth-60,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddPaymentCardScreen;
