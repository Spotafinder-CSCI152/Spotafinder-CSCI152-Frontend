
// // import React from 'react';
// // import { GiftedChat } from 'react-native-gifted-chat';
// // import {View, TouchableOpacity, Button, Text} from 'react-native'
// // import Router from '../../navigator/router';
// // import Style from './style';
// // export default class Bookroom extends React.Component {
// //   render() {
// //     return ( 
    
    
// //         <View>

// //         <Button  style={{  display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center"}}
// //             title= "Press Me"
// //             onPress = {() => {Router.navigation('Home', {User:'Home'})
// //             }}
// //             />
// //             <Button  style={{  display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center"}}
// //             title= "Press Me"
// //             onPress = {() => {Router.navigation('Home', {User:'Home'})
// //             }}
// //             />
// //             <Button  style={{  display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center"}}
// //             title= "Press Me"
// //             onPress = {() => {Router.navigation('Home', {User:'Home'})
// //             }}
// //             />


        
// //     </View>
        






    
// //     );
// //   }
// // }


// // import React from 'react';
// // import { GiftedChat } from 'react-native-gifted-chat';
// // import {View, TouchableOpacity, Button, Text} from 'react-native'
// // import Router from '../../navigator/router';
// // import Style from './style';
// // export default class newsfeed extends React.Component {
// //   render() {
// //     return ( 
    
    
// // <View>

// // <Button  style={{  display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center"}}
// //             title= "Press Me"
// //             onPress = {() => {Router.navigation('Home', {User:'Home'})
// //             }}
// //             />
// //             <Button  style={{  display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center"}}
// //             title= "Press Me"
// //             onPress = {() => {Router.navigation('Home', {User:'Home'})
// //             }}
// //             />
// //             <Button  style={{  display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center"}}
// //             title= "Press Me"
// //             onPress = {() => {Router.navigation('Home', {User:'Home'})
// //             }}
// //             />



// // </View>






    
// //     );
// //   }
// // }

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Button,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   ListView
// } from 'react-native';
// import Router from '../../../navigator/router';

// export default class Room1 extends Component {



//   render() {
//     return (
//       <View style={styles.container}>
//       <Button  style={{  display: "flex",
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
         

         
//       </View>
//     );
//   }
// }

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';
 
// export default class Room1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }
 
//   onDateChange(date) {
//     this.setState({
//       selectedStartDate: date,
//     });
//   }
//   render() {
//     const { selectedStartDate } = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//     return (
//       <View style={styles.container}>
//         <CalendarPicker
//           onDateChange={this.onDateChange}
//         />
 
//         <View>
//           <Text>SELECTED DATE:{ startDate }</Text>
//         </View>
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 100,
//   },
// });
import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Calander from '../utils/calander';
import Router from '../../../navigator/router';



// export default class PopCal extends Component {
//   state = {
//     isModalVisible: false,
//   };

//   toggleModal = () => {
//     this.setState({isModalVisible: !this.state.isModalVisible});
//   };

//   render() {
//     return (
//       <View style={styles.box}>
//         <Button title="Calander" 
//         onPress={this.toggleModal} 
//         color="#000000"
//         />
//         <Modal isVisible={this.state.isModalVisible}>
//           <View style={{flex: 1}}>
//             <Calander/>
//             <Button title="Hide Calander" 
//             onPress={this.toggleModal} 
//             color="#000000"
//             />
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   box: {
//     flex: 1,
//     marginLeft: 90,
//   }
// });



export default class PopCal extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={styles.box}>
      <Button title="Calander" 
      onPress = {() => {Router.navigation('Test', {User:'Test'})
            }}
      color="#AA1428"
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginLeft: 90,
    fontSize:19,
    fontWeight:'900',
  },
  
});
