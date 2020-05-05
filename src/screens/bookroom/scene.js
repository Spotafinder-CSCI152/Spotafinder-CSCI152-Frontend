
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
  ListView,
  SafeAreaView
} from 'react-native';
import Router from '../../navigator/router';
import Modal from 'react-native-modal';
import Popcal from './utils/popcal';
import Item from './utils/item';
import SafeViewAndroid from '../../tool/globalstyle';
export default class Bookroom extends Component {
 
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Room"},
        
      ]),
    };
  }

  render() {
    return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} >
      <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerContent}>
            <TouchableOpacity onPress = {() => {Router.navigation('Home', {User:'Home'})
            }}>
                <Image style={styles.avatar} source={{uri: 'http://asbarez.com/App/Asbarez/eng/2015/01/fresno-state-library.jpg'}}/>
                </TouchableOpacity>
                <Text style={styles.name}>Fresno State Library Room booking</Text>
            </View>
          </View>

          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <View>
                  <View style={styles.box}>
                  <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/H-teJf_Oxac/maxresdefault.jpg'}}/>
                       <Text style={styles.username}>Data .....</Text>
                  <Item/>
                  </View>
                  <View style={styles.box}>
                  <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/H-teJf_Oxac/maxresdefault.jpg'}}/>
                       <Text style={styles.username}>Room 1</Text>
                  <Popcal/>
                  </View>
                  
                  <View style={styles.box}>
                  <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/H-teJf_Oxac/maxresdefault.jpg'}}/>
                       <Text style={styles.username}>Room 2</Text>
                       <Popcal/>
                  </View>

                  
                  <View style={styles.box}>
                  <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/H-teJf_Oxac/maxresdefault.jpg'}}/>
                       <Text style={styles.username}>Room 3</Text>
                       <Popcal/>
                  </View>

                  
                  <View style={styles.box}>
                  <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/H-teJf_Oxac/maxresdefault.jpg'}}/>
                       <Text style={styles.username}>Room 4</Text>
                       <Popcal/>
                  </View>

                  
                  <View style={styles.box}>
                  <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/H-teJf_Oxac/maxresdefault.jpg'}}/>
                       <Text style={styles.username}>Room 5</Text>
                       <Popcal/>
                  </View> 

                  
                  
                  </View>
                )
            }}/>
          </View>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#AA1428",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
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
    fontSize:19,
    color:"#E6E6FA",
    fontWeight:'900',
  },
  box22: {
    flex: 1,
    marginLeft: 90,
    fontSize:19,
    fontWeight:'900',
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
    color: "#FFFFFF",
    fontSize:19,
    alignSelf:'center',
    marginLeft:10,
    fontWeight:'900',
  }
});
