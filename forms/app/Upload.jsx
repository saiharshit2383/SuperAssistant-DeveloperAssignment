import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

function ImageUploadForm() {
  const [imageUri, setImageUri] = useState(null);
  const [error, setError] = useState(null);

  const pickImage = async () => {
    // Ask for media library permissions
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      setError("Permission to access media library is required!");
      return;
    }

    // Let the user pick an image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Optional: Make the image square
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Save the image URI
      setError(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Image:</Text>

      {/* Button to choose an image */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      {/* Conditionally render the image or error message */}
      {imageUri ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <Text style={styles.placeholderText}>No image selected</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  imageContainer: {
    marginTop: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
  placeholderText: {
    color: "#888",
    marginTop: 16,
  },
});

export default ImageUploadForm;
