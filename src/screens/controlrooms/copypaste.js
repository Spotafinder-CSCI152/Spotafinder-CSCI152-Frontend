import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { SafeAreaView, FlatList,Text,ScrollView,View, StyleSheet,Button} from 'react-native';
import SafeViewAndroid from '../../tool/globalstyle';
import firebase from '../../configs/firebase';
import Router from '../../navigator/container';
import { colors } from 'react-native-elements';

export default class copypaste extends Component {
  constructor(props){
    super(props)
    this.state = { cool:[],x:0,x2:0}
    

   const fd = async() => {

    
      try {
        const snapshot = await firebase.database().ref('Engineering East').child('rooms').child('GilbertsRoom').child('2020').child('05');
        snapshot.on('value', snapshot => {
            var cool = []
            
            snapshot.forEach((snapshotChild)=>{
                var month=[]
                snapshotChild.forEach((snapchatchildChild)=>{
                    month=[...month,snapchatchildChild.val().soundlevel*100]
                })
                cool.push(month)
                
            })
            
              var m1,m2,m3,x,x2,x3;
            m1 = eval(cool[0].join('+'))
            x = m1/cool[0].length
            
            

            m2 = eval(cool[1].join('+'))
            x2 = m2/cool[1].length
            
            this.setState({cool:cool})
            this.setState({x:x})
             this.setState({x2:x2})
        });
        
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
     
      <Text style={styles.box}>Average percent for the month of March: {this.state.x}%</Text>
      <Text style={styles.box}>Average percent for the month of April: {this.state.x2}%</Text>

      </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    fontSize:19,
    fontWeight:'900',
    color:'white'
  },
  
});

