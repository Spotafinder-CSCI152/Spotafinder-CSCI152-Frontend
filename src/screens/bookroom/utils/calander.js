import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import firebase from '../../../configs/firebase';
import { database } from 'firebase';
 
export default class Calander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
    
  }


 

  onDateChange(date) {
    if(date != null){
    this.setState({
      selectedStartDate: date,
      temp: date,
    });
  
    //const id = firebase.auth().currentUser.uid;
    firebase.firestore().collection('calander').add({selectedStartDate:this.state.selectedStartDate}); 
  }
    // console.log(date);
    // console.log('----------')
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    // console.log(startDate);
    // console.log(selectedStartDate);
    // console.log('----------')
    //console.log(date);
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          
        />
 
        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});