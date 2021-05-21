import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();
export default class Welcome extends React.Component{
    
    
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style = {styles.container}> 
                <Image source = {require('../images/SalesPace.png')}
                    style={styles.logo}
                />
                
                <View style={{
                    flexDirection:"row",
                    alignItem:"center",
                    marginHorizontal:0,
                    borderWidth:2,
                    marginTop:70,
                    paddingHorizontal:15,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <Text 
                        onPress={()=>navigate('Login')}
                        style={styles.title}>Welcome!
                    </Text>
                </View>
                
                <Image source = {require('../images/sg.png')}
                    style={styles.tinyLogo}
                    marginTop={70}
                
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      padding: 50,
      marginTop: 50,
      backgroundColor:"#FFF",
      height:"100%",
    },
    tinyLogo: {
      width: 150,
      height: 100,
      resizeMode:'contain',
      alignSelf:"center",
    },
    logo: {
      width: 300,
      height: 200,
      resizeMode:'contain',
      alignSelf:"center",
    },
    title: {
        fontSize: 55,
        fontWeight:'bold',
    },
    text: {
        fontSize: 20,
        color:"white"
    },
    input: {
        paddingHorizontal:10,
    },
    error:{
        borderWidth:2,
        borderColor:'red',
    }
  });