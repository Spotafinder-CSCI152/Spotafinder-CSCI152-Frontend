
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {View, TouchableOpacity, Button, Text, Slider,StyleSheet} from 'react-native'
import Router from '../../navigator/router';
import Switchy from './assets/switchy';
import Picky from './assets/colorpicker'
import { CirclePicker } from 'react-color';
import NumericInput from 'react-native-numeric-input'
//import Style from './style';
//import Slider from '@react-native-community/slider';
import { ColorPicker } from 'react-native-color-picker'
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
    console.log('Switch 1 is: ' + value)
 }
 

  render() {
    const {value} = this.state;
    return (
      <View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 200,
    marginBottom: 10
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
  containertwo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 200,
    marginLeft: 80,
    marginBottom: 10
  },
});


