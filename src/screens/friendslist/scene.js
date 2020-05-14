
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
  ListView,
  SafeAreaView
} from 'react-native';
import Router from '../../navigator/router';
import SafeViewAndroid from '../../tool/globalstyle';
export default class friendlist extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Dr.Liu"},
         {image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Vincy Poo"},
         {image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Davey Poo"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Golly Poo"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Brainy Poo"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Irajy Poo"},
      ]),
    };
  }

  render() {
    return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
      <View style={styles.container}>
      <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "GO HOME"
            onPress = {() => {Router.navigation('Home', {User:'Home'})
            }}
            color='#000042'
            />
            
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                <Text style={styles.name}>Main Protagonist</Text>
            </View>
          </View>

          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: user.image}}/>
                       <Text style={styles.username}>{user.username}</Text>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#aa1428",
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
    borderColor: "#E6E6FA",
    marginBottom:10,
  },
  image:{
    width: 60,
    height: 60,
  },
  name:{
    fontSize:22,
    color:"#E6E6FA",
    fontWeight:'600',
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
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
  username:{
    color: "#E6E6FA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  }
});
