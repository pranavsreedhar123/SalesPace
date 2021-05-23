import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();
export default class Progress extends React.Component{
    
    
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style = {{flex:1}}> 
                <Image source = {require('../images/SalesPace.png')}
                    style={styles.logo}
                />
                
                <View style={styles.container}>
                    <Text style={styles.title} onPress={()=>navigate('Login')}>
                        This page is still under progress!
                        </Text>
                    <Icon 
                        name="tool" 
                        size={60} 
                        color="#900" 
                        />
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
        padding:5,
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:70,
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
      marginBottom: 40,
      marginTop: 80,
    },
    title: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        width:"90%",
        padding:5,
    },
    text: {
        fontSize: 20,
        color:"white"
    },
    input: {
        width:"80%",
        borderColor:"#c6c8cc",
        borderWidth:2,
        borderRadius:25,
        padding:5,
        backgroundColor:"#e6e6e6",
    },
    error:{
        borderWidth:2,
        borderColor:'red',
    }
  });