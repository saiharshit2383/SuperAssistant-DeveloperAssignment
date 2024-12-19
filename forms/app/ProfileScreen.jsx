import { View, Text, TouchableOpacity, Image, Alert, Linking, StyleSheet } from 'react-native';
import React from 'react';

const ProfileScreen = ({ navigation }) => {
  const update1 = () => {
    navigation.navigate("Blank");
  };

  const update2 = () => {
    navigation.navigate("Quiz");
  };

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => Alert.alert('Error', 'Unable to open URL'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Canvas</Text>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => openURL('https://www.openai.com/chatgpt')} style={styles.imageWrapper}>
          <Image 
            source={require('../assets/images/chatgpt.png')} 
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { update1() }} style={styles.imageWrapper}>
          <Image 
            source={require('../assets/images/blank.png')} 
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { update2() }} style={styles.imageWrapper}>
          <Image 
            source={require('../assets/images/quiz.png')} 
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  imageWrapper: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
