import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome6 name="file-alt" size={24} color="white" style={styles.icon} />
        <Text style={styles.headerText}>Terms and Conditions</Text>
      </View>
      <Text style={styles.paragraph}>
        We at Wasai LLC respect the privacy of your personal information and, as such, make every effort to ensure your information is protected and remains private. As the owner and operator of loremipsum.io (the "Website") hereafter referred to in this Privacy Policy. This Privacy Policy will inform you about the types of personal data we collect, the purposes for which we use the data, the ways in which the data is handled and your rights with regard to your personal data. For the purpose of this Privacy Policy the Data Controller of personal data is Wasai LLC and our contact details are set out in the Contact section at the end of this Privacy Policy. For purposes of this Privacy Policy, "Your Information" or "Personal Data" means information about you, which may be of a confidential or sensitive nature and may include personally identifiable information ("PII") and/or financial information. PII means individually identifiable information that would allow us to determine the actual identity of a specific living person, while sensitive data may include information, comments, content and other information that you voluntarily provide. BY ACCESSING OR USING OUR SERVICES, YOU CONSENT TO THE COLLECTION, TRANSFER, MANIPULATION, STORAGE, DISCLOSURE AND OTHER USES OF YOUR INFORMATION (COLLECTIVELY, "USE OF YOUR INFORMATION") AS DESCRIBED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH OR CONSENT TO THIS PRIVACY POLICY YOU MAY NOT ACCESS OR USE OUR SERVICES.
      </Text>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
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
  paragraph: {
    fontSize: 14,
    color: '#3B3B3B',
    marginBottom: 14,
    textAlign: 'justify', // Align text to justify
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#3B3B3B',
  },
  buttonContainer: {
    backgroundColor: '#FF8A00',
    alignItems: 'center',
    paddingVertical:10,
    marginBottom: 20, // Add margin bottom to separate from the paragraph
  },
  buttonText:{
    color:"white",
  }
});


export default TermsAndConditions;
