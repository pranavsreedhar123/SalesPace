import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();
export default class Login extends React.Component{
    constructor() {
        super()
        this.state={
            email:'',
            password:''
        }
    }
    validate(email,password){
        if(email!=="pranavsreedhar2002@gmail.com" || password!=="password123") {
            alert('Incorrect Email Address or Password')
        } else {
            this.props.navigation.navigate('app')
        }
    }
    
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
                    
                    <Icon name="mail" size={25} color="#900" />
                    <TextInput 
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="Email"
                        style={styles.input}
                        returnKeyLabel={"next"}
                        onChangeText={(text)=>this.setState({email:text})}
                        />
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItem:"center",
                    marginHorizontal:1,
                    borderWidth:2,
                    marginTop:30,
                    paddingHorizontal:15,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" size={27} color="#900" />
                    <TextInput 
                        secureTextEntry
                        autoCapitalize="none"
                        placeholder="Password"
                        style={styles.input}
                        returnKeyLabel={"next"}
                        onChangeText={(text)=>this.setState({password:text})}
                        />
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:50,
                    backgroundColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:8
                }}>
                    <Text 
                        onPress={()=>this.validate(this.state.email,this.state.password)}
                        style={styles.text}>Sign In
                    </Text>
                </View>
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:25,
                    backgroundColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:8
                }}>
                    <Text 
                        onPress={()=>this.props.navigation.navigate('Register')}
                        style={styles.text}>Sign Up
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
        fontSize: 30,
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