import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();
export default class Register extends React.Component{
    constructor() {
        super()
        this.state={
            email:'',
            emailValidate:false,
            password:'',
            cpassword:'',
            passwordValidate:false,
        }
    }
    validate(text,type){
        emailVerification=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if(type=='Email'){
            if(emailVerification.test(text)) {
                this.setState({
                    emailValidate:true,
                })
            } else {
                this.setState({
                    emailValidate:false,
                })
            }
        }
    }
    validatePass(pass,cpass){
        if(pass === cpass){
            this.setState({
                passwordValidate:true,
            })
        } else {
            this.setState({
                passwordValidate:false,
            })
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
                        onChangeText={(text)=>this.validate(text,'Email')}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="Email"
                        returnKeyLabel="next"
                        style={[styles.input,
                            !this.state.emailValidate? styles.error:null]}
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
                        onChangeText={(text)=>this.setState({password:text})} 
                        secureTextEntry
                        autoCapitalize="none"
                        placeholder="Password"
                        returnKeyType="next"
                        style={styles.input}
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
                        onChangeText={(text)=>this.validatePass(this.state.password,text)}
                        secureTextEntry
                        autoCapitalize="none"
                        placeholder="Confirm Password"
                        returnKeyType="done"
                        style={[styles.input,
                            !this.state.passwordValidate? styles.error:null]}
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
                        onPress={()=>{
                            this.validatePass(this.state.password,this.state.cpassword)
                            if (this.state.emailValidate===true && this.state.passwordValidate===true){ 
                                alert('Account created - You will be directed to the login page')
                                navigate('Login') 
                            } else if(this.state.emailValidate === false){
                                alert('Enter a valid email address!')
                            } else if(this.state.passwordValidate === false){ 
                                alert('Your password do not match!')
                            } else {
                                alert('You have one or more errors!')
                            }
                        }}
                        style={styles.text}>Register
                    </Text>
                </View>
                <Image source = {require('../images/sg.png')}
                    style={styles.tinyLogo}
                    marginTop={40}
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