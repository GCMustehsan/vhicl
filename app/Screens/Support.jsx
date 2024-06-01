import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import BottomNavigation from '../Components/BottomNavigation';
import { router } from 'expo-router';

const windowWidth = Dimensions.get('window').width;

const basePrices = {
  "Pre Buy Streaming": 20,
  "Pre Buy Ticket": 20,
  "Meet and Greet": 1000,
  "Founder's Credit": 1500,
  "Filming Day Tour": 5000,
  "Walk On Role": 18000,
};

const SupportScreen = () => {
  const [current, setCurrent] = useState("Pre Buy Streaming");
  const [quantities, setQuantities] = useState({
    "Pre Buy Streaming": 1,
    "Pre Buy Ticket": 1,
    "Meet and Greet": 1,
    "Founder's Credit": 1,
    "Filming Day Tour": 1,
    "Walk On Role": 1,
  });

  const incrementQuantity = (category) => {
    setQuantities({
      ...quantities,
      [category]: quantities[category] + 1,
    });
  };

  const decrementQuantity = (category) => {
    if (quantities[category] > 1) {
      setQuantities({
        ...quantities,
        [category]: quantities[category] - 1,
      });
    }
  };

  const getPrice = (category) => {
    return basePrices[category] * quantities[category];
  };

  const HandleSupport=()=>{
    router.push('/Screens/TermsandCondition');
  }
  return (
    <View style={styles.container}>
      {/* Support Heading with Logo */}
      <View style={styles.heading}>
        <FontAwesome5 name="hand-holding-heart" size={24} color="white" />
        <Text style={styles.headingText}>Support</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.header]}>
            <Text style={[styles.tableHeader, styles.center]}>Category</Text>
            <Text style={[styles.tableHeader, styles.center]}>Quantity</Text>
            <Text style={[styles.tableHeader, styles.center]}>Price</Text>
          </View>
          {/* Table Body */}
          {Object.keys(quantities).map((category, index) => (
            <View key={index} style={styles.tableRow}>
              <RadioButtonGroup
                selected={current}
                onSelected={(value) => setCurrent(value)}
                radioBackground='#FF8A00'
              >
                <RadioButtonItem value={category} label={category} />
              </RadioButtonGroup>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={() => decrementQuantity(category)}>
                  <Text style={{color:"#FF8A00"}}>-</Text>
                </TouchableOpacity>
                <TextInput style={styles.quantityInput} value={quantities[category].toString()} editable={false} />
                <TouchableOpacity style={styles.quantityButton} onPress={() => incrementQuantity(category)}>
                  <Text style={{color:"#FF8A00"}}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.tableData}>${getPrice(category)}</Text>
            </View>
          ))}
        </View>
        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text>Invests for returns</Text>
          <TextInput style={styles.input} placeholder="Enter Amount" />
          <Text>Donate</Text>
          <TextInput style={styles.input} placeholder="Enter Amount" />
        </View>
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={HandleSupport}>
            <Text style={styles.button1}>Support Now</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button2}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: windowWidth,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FF8A00',
    width: windowWidth,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  table: {
    paddingHorizontal: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 4,
    width: windowWidth,
  },
  tableHeader: {
    fontWeight: 'bold',
    width: '30%',
  },
  tableData: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // center the quantity inputs
    alignItems: 'center',
    marginHorizontal: 10,
  },
  quantityButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: '#FF8A00',
    color: '#FF8A00',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 50,
    textAlign: 'center',
  },
  inputContainer: {
    marginVertical: 16,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    marginVertical: 16,
    flexDirection: 'column',
    justifyContent: 'pace-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  button1: {
    color: 'white',
    backgroundColor: '#FF8A00',
    textAlign: 'center',
    paddingVertical: 10,
    marginBottom: 8,
  },
  button2: {
    color: '#FF8A00',
    borderWidth: 1,
    borderColor: '#FF8A00',
    textAlign: 'center',
    paddingVertical: 10,
  },
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SupportScreen;
