import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Dimensions,TouchableOpacity } from 'react-native';
import {
    LineChart
} from 'react-native-chart-kit'
import Style from './style'
import Router from '../../navigator/router';

export default class graph extends React.Component {
    render() {
        const line = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
            datasets: [
              {
                data: [2, 4, 6, 8, 10, 12],
                strokeWidth: 2, // optional
              },
            ],
          };
          
        return (
 <View>
     {/* <View style = {Style.row}> 
                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Home', {Home: 'Home'});
                        }}></TouchableOpacity>
      </View>               */}
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

    <View style = {Style.graph_size}>
     <Text>
       Library Data 
    </Text>
    
    <LineChart
        data={line}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel={'Time'}
        chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#FF0000',
        backgroundGradientTo: '#00FF',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        } 
        }}
        bezier
        style={{
         marginVertical: 8,
         borderRadius: 16
        }}
    />
    </View>

 </View>
 

        );
    }
}