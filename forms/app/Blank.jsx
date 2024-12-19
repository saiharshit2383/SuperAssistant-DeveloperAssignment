import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ImageUploadForm from "./Upload";

const Blank = () => {
  const [formTitle, setFormTitle] = useState("");
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    setQuestions([
      ...questions,
      { type, text: "", options: [], selectedOption: null },
    ]);
  };

  const updateQuestionText = (index, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = text;
    setQuestions(updatedQuestions);
  };

  const updateOptionText = (questionIndex, optionIndex, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = text;
    setQuestions(updatedQuestions);
  };

  const renderGridQuestion = (question, index) => (
    <View key={index} style={styles.questionContainer}>
      <Text style={styles.questionLabel}>Grid Question</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your question here"
        value={question.text}
        onChangeText={(text) => updateQuestionText(index, text)}
      />
      <Text style={styles.subtitle}>Options:</Text>
      {question.options.map((option, optIndex) => (
        <View key={optIndex} style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].selectedOption = optIndex;
              setQuestions(updatedQuestions);
            }}
          >
            <View
              style={[
                styles.radioCircle,
                question.selectedOption === optIndex && styles.radioSelected,
              ]}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.inputOption}
            placeholder={`Option ${optIndex + 1}`}
            value={option}
            onChangeText={(text) => updateOptionText(index, optIndex, text)}
          />
        </View>
      ))}
      <Button
        title="Add Option"
        onPress={() => {
          const updatedQuestions = [...questions];
          updatedQuestions[index].options.push("");
          setQuestions(updatedQuestions);
        }}
      />
    </View>
  );

  const renderQuestion = (question, index) => {
    switch (question.type) {
      case "text":
        return (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionLabel}>Text Question</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your question here"
              value={question.text}
              onChangeText={(text) => updateQuestionText(index, text)}
            />
            {/** Safely render the ImageUploadForm */}
            <ImageUploadForm />
          </View>
        );

      case "grid":
        return (
          <View key={index}>
            {renderGridQuestion(question, index)}
            {/** Safely render the ImageUploadForm */}
            <ImageUploadForm />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Form Builder</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Form Title"
        value={formTitle}
        onChangeText={setFormTitle}
      />
      <Button title="Add Text Question" onPress={() => addQuestion("text")} />
      <Button title="Add Grid Question" onPress={() => addQuestion("grid")} />

      <Text style={styles.subtitle}>Questions:</Text>
      {questions.map((question, index) => (
        <View key={index}>
          {renderQuestion(question, index)}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  questionContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  questionLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    marginRight: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    backgroundColor: "#000",
  },
  inputOption: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
});

export default Blank;
