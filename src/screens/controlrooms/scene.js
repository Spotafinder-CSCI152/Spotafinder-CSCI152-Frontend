
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {View, TouchableOpacity, Button, Text, Slider,StyleSheet,SafeAreaView, ScrollView} from 'react-native'
import Router from '../../navigator/router';
import Switchy from './assets/switchy';
import Picky from './assets/colorpicker'
import { CirclePicker } from 'react-color';
import NumericInput from 'react-native-numeric-input'
//import Style from './style';
//import Slider from '@react-native-community/slider';
import { ColorPicker } from 'react-native-color-picker'
import { startAsync } from 'expo/build/AR';
import SafeViewAndroid from '../../tool/globalstyle';
import Copypaste from '../controlrooms/copypaste'
export default class Controlroom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      switch1Value: false,
      //values:50,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  // change(values) {
  //   this.setState(() => {
  //     return {
  //       value: parseFloat(values),
  //     };
  //   });
  // }

  
 toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
    const fun= async() =>{
      if(value === true){
        await this.lightsON();
      }
      else{
        await this.lightsOFF();
      }
    }
    fun();
 }
  lightsON = async () => {
  const response = await fetch('https://api.particle.io/v1/devices/e00fce681c2671fc7b1680eb/lightControl', {
    method: 'POST',
    body: 'access_token=79d528c35795f9a36a5e43e99105083d51cd87ac&args=1', // string or object
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson)
}

 lightsOFF = async () => {
  const response = await fetch('https://api.particle.io/v1/devices/e00fce681c2671fc7b1680eb/lightControl', {
    method: 'POST',
    body: 'access_token=79d528c35795f9a36a5e43e99105083d51cd87ac&args=0', // string or object
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson)
}
 

  render() {
    const {value} = this.state;
    return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} >
      <ScrollView>
      
          <View style={{backgroundColor:'#E6E6FA'}}>
          
            <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "GO BACK"
            onPress = {() => {Router.navigation('Test', {User:'Test'})
            }}
            color='#000042'
            />
            <Text style={styles.text2}>Control Room</Text>
        <View style={styles.container}>
          <Text style={styles.text}>{String(value)}</Text>
          <Slider
            step={1}
            maximumValue={100}
            onValueChange={this.change.bind(this)}
            value={value}
          />
          <Text style={styles.text}> Brightness of the lights </Text>
          
        </View>
        <View style={styles.container}>
        <Switchy

        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            toggleSwitch1 = {this.toggleSwitch1}
            switch1Value = {this.state.switch1Value}/>
            <Text style={styles.text}>Turn Lights on and off</Text>
        </View>
        {/* <View>
        <ColorPicker
          onColorSelected={color => alert(`Color selected: ${color}`)}
          style={{flex: 1, marginTop:50}}
          />
        </View> */}
        {/* <View>
          <CirclePicker />
        </View> */}
        <View style={styles.containertwo}>
        <NumericInput 
            values={this.state.values} 
            onChange={values => this.setState({values})} 
            onLimitReached={(isMax ,msg) => console.log(3,"Hi")}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#ff0000' 
            leftButtonBackgroundColor='#0000ff'/>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>{String(value)}</Text>
          <Slider
            step={1}
            maximumValue={100}
            onValueChange={this.change.bind(this)}
            value={value}
          />
          <Text style={styles.text}> Brightness of the lights </Text>
          
        </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 900,
    marginBottom: 0,
    color:'#AA1428'
  },
  box: {
    fontSize:19,
    fontWeight:'900',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 200,
    marginBottom: 10
  },
  text: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight:'900',
    color:'black',
  },
  text2: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight:'900',
    color:'#E6E6FA',
    backgroundColor:'#AA1428'
  },
 
  containertwo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 200,
    marginLeft: 80,
    marginBottom: 10
  },
  box: {
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#000042',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
});


