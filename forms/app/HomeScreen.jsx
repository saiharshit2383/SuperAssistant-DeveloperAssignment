import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [createCard, setCreateCard] = useState(false);

  const update = () => {
    navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Forms</Text>

      {/* Search Bar */}
      <SearchBar
        placeholder="Search here..."
        platform="default"
        onChangeText={(value) => setSearch(value)}
        value={search}
        round
        lightTheme
      />

      {/* Display Search Result */}
      <Text style={styles.searchText}>{search}</Text>

      

      {/* Navigation Icon at Bottom Right */}
      <TouchableOpacity style={styles.addButton} onPress={update}>
        <Entypo name="circle-with-plus" size={50} color="blue" />
      </TouchableOpacity>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchText: {
    marginTop: 10,
    fontSize: 18,
  },
  cardText: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
