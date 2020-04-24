import React, {useState} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';
import CheckBox from 'react-native-check-box';

const [doneState, setDone] = useState(false);
const onCheck = () => {
    setDone(!doneState);
};

const ToDoItem = () => {
  return (
    <View style = {styles.todoItem}>
      <CheckBox
        checkBoxColor="skyblue"
        onClick={onCheck}
        isChecked={doneState}
        disabled={doneState}
      />
      <Text style = {[styles.todoText, {pocaity: doneState ? .02 : 1}]}>
        A random To-Do item
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    todoItem: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
  
    },
    todoText: {
      borderColor: '#afafaf',
      paddingHorizontal: 5,
      paddingVertical: 7,
      borderWidth: 1,
      borderRadius: 5,
      marginRight: 10,
      minWidth: "50%",
      textAlign: "center"
    },