// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
// import {View, TouchableOpacity,Button, Platform, KeyboardAvoidingView} from 'react-native'
// import Router from '../../navigator/router'
// import Style from './style'

// import firebase from '../../configs/firebase'
// import firebaseSDK from '../../configs/firebaseSDK';
// //import Fire from '../../configs/Fire';
// import { SafeAreaView } from 'react-navigation';

// export default class Chat extends React.Component {
//   // static navigationOptions = ({ navigation }) => ({
//   //   title: (navigation.state.params || {}).name || 'Chat!'
//   // });

//   state = {
//     messages: []
//   };

//   get user() {
//     return {
//       _id:Fire.uid,
//       name:this.props.navigation.state.params.name
//       // name: this.props.navigation.state.params.name,
//       // email: this.props.navigation.state.params.email,
//       // //avatar: this.props.navigation.state.params.avatar,
//       // id: firebaseSDK.uid,
//       // _id: firebaseSDK.uid
//     };
//   }
//   componentDidMount(){
//     Fire.get(message => this.setState(previous=>({
//       messages:GiftedChat.append(previous.messages,message)
//     })))
//   }

//   componentWillUnmount(){
//     Fire.off();
//   }

//   render() {
//     const chat = <GiftedChat messages= {this.state.messages} onSend={Fire.send} user={this.user}/>
//     if(Platform.OS === 'android'){
//       return(
//         <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
//           {chat}
//         </KeyboardAvoidingView>
//       )
//     }
//     return (
//       <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
//     );
//   }

//   // componentDidMount() {
//   //   firebaseSDK.refOn(message =>
//   //     this.setState(previousState => ({
//   //       messages: GiftedChat.append(previousState.messages, message)
//   //     }))
//   //   );
//   // }
//   // componentWillUnmount() {
//   //   firebaseSDK.refOff();
//   // }
// }
