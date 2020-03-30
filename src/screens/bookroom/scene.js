
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
import Router from '../../navigator/router';

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
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'http://asbarez.com/App/Asbarez/eng/2015/01/fresno-state-library.jpg'}}/>
                <Text style={styles.name}>Fresno State Library Room booking</Text>
            </View>
          </View>

          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <View>
                  <TouchableOpacity  onPress = {() => {Router.navigation('Room1', {User:'Room1'})
            }}>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: 'http://www.mydoorsign.com/img/lg/S/Room-1-Tactile-Braille-Sign-SE-5208.gif'}}/>
                       <Text style={styles.username}>Room 1</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress = {() => {Router.navigation('Room2', {User:'Room2'})
            }}>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/H-teJf_Oxac/maxresdefault.jpg'}}/>
                       <Text style={styles.username}>Room 2</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress = {() => {Router.navigation('Room3', {User:'Room3'})
            }}>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: 'https://www.touchtapplay.com/wp-content/uploads/2015/09/The-Room-3.jpg'}}/>
                       <Text style={styles.username}>Room 3</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress = {() => {Router.navigation('Room4', {User:'Room4'})
            }}>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: 'https://www.touchtapplay.com/wp-content/uploads/2015/09/The-Room-3.jpg'}}/>
                       <Text style={styles.username}>Room 4</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => {Router.navigation('Room5', {User:'Room5'})
            }} >
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: 'https://www.touchtapplay.com/wp-content/uploads/2015/09/The-Room-3.jpg'}}/>
                       <Text style={styles.username}>Room 5</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                )
            }}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#FF0000",
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
  box: {
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#00FF',
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
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  }
});
