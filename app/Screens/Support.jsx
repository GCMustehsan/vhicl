import {React ,useState}from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
const windowWidth = Dimensions.get('window').width;

const SupportScreen = () => {
  const [current, setCurrent] = useState("test");
  return (
    <View style={styles.container}>
      {/* Support Heading with Logo */}
      <View style={styles.heading}>
        <FontAwesome5 name="hand-holding-heart" size={24} color="white" />
        <Text style={styles.headingText}>Support</Text>
      </View>
      <View style={{ marginTop: 50 }}>
      <RadioButtonGroup
        containerStyle={{ marginBottom: 10 }}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="green"
      >
        <RadioButtonItem value="test2" label="Example with string" />
        <RadioButtonItem
          value="test"
          label={
            <Text style={{ color: "red" }}>Example passing React Element</Text>
          }
        />
      </RadioButtonGroup>
    </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Category</Text>
            <Text style={styles.tableHeader}>Quantity</Text>
            <Text style={styles.tableHeader}>Price</Text>
          </View>
          {/* Table Body */}
          <View style={styles.tableRow}>
            {/* <RadioButton value="first" /> */}
            <Text style={styles.tableData}>Category 1</Text>
            <View style={styles.quantityContainer}>
              <Button title="-" style={styles.quantityButton} />
              <TextInput style={styles.quantityInput} value="1" />
              <Button title="+" style={styles.quantityButton} />
            </View>
            <Text style={styles.tableData}>$10</Text>
          </View>
          <View style={styles.tableRow}>
            {/* <RadioButton value="second" /> */}
            <Text style={styles.tableData}>Category 2</Text>
            <View style={styles.quantityContainer}>
              <Button title="-" style={styles.quantityButton} />
              <TextInput style={styles.quantityInput} value="1" />
              <Button title="+" style={styles.quantityButton} />
            </View>
            <Text style={styles.tableData}>$20</Text>
          </View>
          <View style={styles.tableRow}>
            {/* <RadioButton value="third" /> */}
            <Text style={styles.tableData}>Category 3</Text>
            <View style={styles.quantityContainer}>
              <Button title="-" style={styles.quantityButton} />
              <TextInput style={styles.quantityInput} value="1" />
              <Button title="+" style={styles.quantityButton} />
            </View>
            <Text style={styles.tableData}>$30</Text>
          </View>
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
         <TouchableOpacity>
          <Text style={styles.button1}>Support Now</Text>
         </TouchableOpacity>
         <TouchableOpacity>
          <Text style={styles.button2}>Share</Text>
         </TouchableOpacity>
        </View>
      </ScrollView>
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
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  tableHeader: {
    fontWeight: 'bold',
    width: '30%',
  },
  tableData: {
    flex: 1,
    textAlign: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 8,
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
    flexDirection: 'col',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button1: {
    color: 'white',
    backgroundColor:'#FF8A00',
    textAlign:'center',
    paddingVertical:10,
    marginBottom:8
  },
  button2: {
    color: '#FF8A00',
    borderWidth:1,
    borderColor:'#FF8A00',
    textAlign:'center',
    paddingVertical:10
  },
});

export default SupportScreen;
