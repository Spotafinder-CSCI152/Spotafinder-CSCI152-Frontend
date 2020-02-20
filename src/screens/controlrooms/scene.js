
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {View, TouchableOpacity, Button, Text} from 'react-native'
import Router from '../../navigator/router';
import Style from './style';
export default class Controlroom extends React.Component {
  render() {
    return ( 
    
    
    <View>

<Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "Press Me"
            onPress = {() => {Router.navigation('Home', {User:'Home'})
            }}
            />
            <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "Press Me"
            onPress = {() => {Router.navigation('Home', {User:'Home'})
            }}
            />
            <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "Press Me"
            onPress = {() => {Router.navigation('Home', {User:'Home'})
            }}
            />


        
    </View>






    
    );
  }
}

