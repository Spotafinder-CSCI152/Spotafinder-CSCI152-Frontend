
import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Calander from '../utils/calander';
import Router from '../../../navigator/router';
export default class item extends Component {
    state = {
      isModalVisible: false,
    };
  
    toggleModal = () => {
      this.setState({isModalVisible: !this.state.isModalVisible});
    };
  
    render() {
      return (
        <View style={styles.box}>
        <Button title="Graph" 
        onPress = {() => {Router.navigation('Graph', {User:'Graph'})
              }}
        color="#AA1428"
        />
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    box: {
      flex: 1,
      marginLeft: 90,
      fontSize:19,
      fontWeight:'900',
    },
    
  });