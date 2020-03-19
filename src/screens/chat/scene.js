import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {View, TouchableOpacity,Button} from 'react-native'
import Router from '../../navigator/router'
import Style from './style'


import firebaseSDK from '../../configs/firebaseSDK';

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!'
  });

  state = {
    messages: []
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      avatar: this.props.navigation.state.params.avatar,
      id: firebaseSDK.uid,
      _id: firebaseSDK.uid
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSDK.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    firebaseSDK.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message)
      }))
    );
  }
  componentWillUnmount() {
    firebaseSDK.refOff();
  }
}
