
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
  TouchableOpacity,
  ListView,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Router from '../../navigator/router';
import { Window_Width, Window_Height } from '../../utils/constants';
import SafeViewAndroid from '../../tool/globalstyle';
import Copypaste from '../controlrooms/copypaste'




export default class graph extends Component {

  

  render() {
    return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
      <View style={styles.container}>
        <View>
      <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "PRESS TO GO BACK"
            color='#aa1428'
            onPress = {() => {Router.navigation('Bookroom', {User:'Bookroom'})
            }}
            />
            <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "GO BACK"
            color='white'
            onPress = {() => {Router.navigation('Bookroom', {User:'Bookroom'})
            }}
            />
            <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "<3 AMERICA"
            color='#000042'
            onPress = {() => {Router.navigation('Bookroom', {User:'Bookroom'})
            }}
            />

          <View>
          <Text style={styles.box}>Average Loudness Per month Percentiles:</Text>
          <Copypaste/>
          </View>

        </View>
        <View>
          <Image
          source={require('./assets/s.png')}
         style = {styles.background_size}

          />
          </View>
          <View style={{justifyContent:'space-between'}}>
          <Image
          source={require('./assets/T.png')}
         style = {styles.background_size}

          />
          </View>
          <View>
          <Image
          source={require('./assets/b.png')}
         style = {styles.background_size}

          />
          </View>
                
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background_size: {
    justifyContent: 'center',
    alignItems: 'center',
    
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: 200,
},
  header:{
    backgroundColor: "#20B2AA",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom:10,
  },
  image:{
    width: 60,
    height: 60,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
  },
  
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  box: {
    fontSize:19,
    fontWeight:'900',
    color:'black'
  },
  
});
