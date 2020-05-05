// import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import React, {Component} from 'react'; 
import {View, TouchableOpacity, Button, Text, Slider,StyleSheet,Image} from 'react-native'
import Router from '../../navigator/router';
import SafeViewAndroid from '../../tool/globalstyle';
import { SafeAreaView } from 'react-navigation';

import firebaseSDK from '../../configs/firebaseSDK';
import firebase from '../../configs/firebase';


export default class chat extends Component {
  state = {
    messages: [],
    _id: firebase.auth().currentUser.uid,
    firstName: '',
    lastName: ''
  }

  componentDidMount() {
    var arrays = [];
    const fd = async () => {
        try {
            const snapshot = await firebase.firestore().collection('chat').get();
            const data = snapshot.docs.map(doc => doc.data());
            for (let i = 0; i < data.length; ++i) {
                const currMessage = data[i].messages
                arrays = [...currMessage, ...arrays];
            }
            const newSnap = await firebase.firestore().collection('users').doc(this.state._id).get();
            this.setState({
                firstName: newSnap.data().first_name,
                lastName: newSnap.data().last_name
            })

            console.log('From here');
            console.log(arrays)

            for (var i =0; i < arrays.length; ++i) {
                console.log(arrays[i])
            }

            this.setState({
                messages: arrays
              })
        }
        catch (err) {
            console.log(err)
        }
    }
    fd();
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    let id = firebase.auth().currentUser.uid;
    let user = firebase.firestore().collection('users').doc(id).get().then((snapshot) => {
        
        firebase.firestore().collection('chat').add({
            messages:messages,
        })
       
    }); 
  }

  render() {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View style={styles.headerContent}>
        <TouchableOpacity onPress = {() => {Router.navigation('Home', {User:'Home'})
            }}>
                <Image style={styles.avatar} source={{uri: 'http://asbarez.com/App/Asbarez/eng/2015/01/fresno-state-library.jpg'}}/>
                </TouchableOpacity>
                </View>
      <GiftedChat
        renderUsernameOnMessage={true}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: this.state._id,
          name: this.state.firstName + this.state.lastName,
          avatar: 'https://placeimg.com/140/140/any'
        }}
        
      />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
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
    headerContent:{
        padding:30,
        alignItems: 'center',
      },
    
  });