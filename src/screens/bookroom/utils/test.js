import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { SafeAreaView, FlatList,Text,ScrollView,View, StyleSheet,Button} from 'react-native';
import SafeViewAndroid from '../../../tool/globalstyle';
import firebase from '../../../configs/firebase';
import Router from '../../../navigator/router';
function Item(prop) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View style={styles.box}>
   {/* // style={{backgroundColor:'white',fontSize:19,fontWeight:'900'}} */}
      <Text style={{backgroundColor:'#AA1428',color:'#E6E6FA',padding:10,fontSize:19,fontWeight:'900'}}> User {prop.data.user} has booked this room on: </Text>
      <Text style={{backgroundColor:'#000042',color:'#E6E6FA',padding:10,fontSize:19,fontWeight:'900'}}> {prop.data.selectedStartDate}</Text>
      </View>
      </SafeAreaView>
  );
}
export default class test extends Component {
  constructor(props){
    super(props)
    this.state = {date:"5-5-20",bookedday:[]}

   const fd = async() => {

      try {
        const snapshot = await firebase.firestore().collection('calander').get();
        const data = snapshot.docs.map(doc => {
          const dayta = doc.data();
          dayta['id']=doc.id;
          // this.setState({id:[...this.state.id,doc.id]})
          this.setState({bookedday:[...this.state.bookedday,doc.data()]})
          console.log(dayta);
          

        });
        
        
        // console.log(this.state.id);
        // console.log(this.state.bookedday)
        
      }
    
    catch (err) {
        console.log(err)
    }
    
    
    }

    fd();

  }
 

  render(){
    return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}   >
      <ScrollView style={{backgroundColor:'#AA1428'}}>

<Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "List of dates Booked"
            onPress = {() => {Router.navigation('Home', {User:'Home'})}}
            color="#000042"
            />
             
            <Text style={{backgroundColor:'white',fontSize:19,fontWeight:'900'}}>Click the calander Icon to choose the date you would like to book</Text>
           <View style={{flexDirection: 'column'}}>
            <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="MM-DD-YYYY"
        minDate="05-05-2020"
        maxDate="05-05-2021"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        is24Hour={true}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
            fontSize:19,
            fontWeight:'900'
          },
          dateInput: {
            marginLeft: 36,
            fontSize:19,
            fontWeight:'900'
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})
        let id = firebase.auth().currentUser.uid;
        firebase.firestore().collection('calander').add({selectedStartDate:date,user:id});
        console.log(date)
        }}
        
      />
      <Button  style={{  display: "flex",
            justifyContent: "center",
            alignItems: "center"}}
            title= "Go to Smart Room Control Center"
            onPress = {() => {Router.navigation('Controlroom', {User:'Controlroom'})}}
            color="#000042"
            height="100"
            />
            </View>
      <FlatList
        data= {this.state.bookedday}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={item => item.id}
        maxToRenderPerBatch={10}
        //updateCellsBatchingPeriod={50}
      
      />
      
      </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    fontSize:19,
    fontWeight:'900',
  },
  
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
// });
