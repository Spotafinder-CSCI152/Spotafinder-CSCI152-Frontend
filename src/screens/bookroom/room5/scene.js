
// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
// import {View, TouchableOpacity, Button, Text} from 'react-native'
// import Router from '../../navigator/router';
// import Style from './style';
// export default class Bookroom extends React.Component {
//   render() {
//     return ( 
    
    
//         <View>

//         <Button  style={{  display: "flex",
//             justifyContent: "center",
//             alignItems: "center"}}
//             title= "Press Me"
//             onPress = {() => {Router.navigation('Home', {User:'Home'})
//             }}
//             />
//             <Button  style={{  display: "flex",
//             justifyContent: "center",
//             alignItems: "center"}}
//             title= "Press Me"
//             onPress = {() => {Router.navigation('Home', {User:'Home'})
//             }}
//             />
//             <Button  style={{  display: "flex",
//             justifyContent: "center",
//             alignItems: "center"}}
//             title= "Press Me"
//             onPress = {() => {Router.navigation('Home', {User:'Home'})
//             }}
//             />


        
//     </View>
        






    
//     );
//   }
// }


// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
// import {View, TouchableOpacity, Button, Text} from 'react-native'
// import Router from '../../navigator/router';
// import Style from './style';
// export default class newsfeed extends React.Component {
//   render() {
//     return ( 
    
    
// <View>

// <Button  style={{  display: "flex",
//             justifyContent: "center",
//             alignItems: "center"}}
//             title= "Press Me"
//             onPress = {() => {Router.navigation('Home', {User:'Home'})
//             }}
//             />
//             <Button  style={{  display: "flex",
//             justifyContent: "center",
//             alignItems: "center"}}
//             title= "Press Me"
//             onPress = {() => {Router.navigation('Home', {User:'Home'})
//             }}
//             />
//             <Button  style={{  display: "flex",
//             justifyContent: "center",
//             alignItems: "center"}}
//             title= "Press Me"
//             onPress = {() => {Router.navigation('Home', {User:'Home'})
//             }}
//             />



// </View>






    
//     );
//   }
// }

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView
} from 'react-native';
import Router from '../../../navigator/router';

export default class Room5 extends Component {



  render() {
    return (
      <View style={styles.container}>
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

