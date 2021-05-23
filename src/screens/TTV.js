import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput,FlatList,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import MiniCard from './MiniCard';
Icon.loadFont();
const SearchScreen = ()=>{
        var subArr = [];
        var filterMiniCardData = [];
        const [value,setValue] = useState("")
        const [miniCardData, setMiniCard] = useState([])
        const [filterData, filterCard] = useState([])
        const [subscribers, setSubData] = useState([])
        const [loading,setLoading] = useState(false)
        const fetchData = () => {
            setLoading(true)
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${value}&regionCode=IN&key=AIzaSyBFVDyp48Uk0a9rcGcP9a4lKdKkRQRG4FU`)
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                setMiniCard(data.items)
            })
            
            let duplicate = false
            let index = 1
            filterMiniCardData[0] = miniCardData[0]
            
            for(let i = 1; i < miniCardData.length; i++) {
                let x = i - 1
                while(x >= 0 && duplicate === false){
                    if(miniCardData[i].snippet.channelTitle === miniCardData[x].snippet.channelTitle){
                        duplicate = true
                    }
                    x--
                }
                if (duplicate === false) {
                    filterMiniCardData[index] = miniCardData[i]
                    index++
                }
            }
            filterCard(filterMiniCardData)
            
            for(let i = 0; i < miniCardData.length; i++) {
                //alert(filterData[i].snippet.channelId)
                fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${miniCardData[i].snippet.channelId}&key=AIzaSyBFVDyp48Uk0a9rcGcP9a4lKdKkRQRG4FU`)
                .then(response=>response.json())
                .then(result=>{
                    setSubData(result.items)
                })
            }
            //alert(subscribers[0].statistics.subscriberCount)
        }

        
    return(
        
        <View style={{flex:1}}>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Search Query"
                    style={styles.input}
                    value={value}
                    onChangeText={(text)=>setValue(text)}
                    />
                <Icon 
                    name="search1" 
                    size={30} 
                    color="#900" 
                    onPress = {()=>fetchData()} />
            </View>
            {loading ? <ActivityIndicator style={{marginTop:10}} size="large" color="red"/>: null}
            <FlatList
                data={miniCardData} 
                // data={filterData} ---> filtered 
                initialNumToRender="5"
                renderItem={({item})=>{
                    return <MiniCard 
                        videoId={item.id.videoId}
                        channel={item.snippet.channelTitle}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.medium.url}
                    />
                }}
                maxToRenderPerBatch="5"
                
                
               
                />
            
        </View>
    )
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
export default SearchScreen