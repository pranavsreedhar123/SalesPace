import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput,FlatList,ActivityIndicator} from 'react-native';
import { sub } from 'react-native-reanimated';
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
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&regionCode=IN&key=AIzaSyBFVDyp48Uk0a9rcGcP9a4lKdKkRQRG4FU`)
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                setMiniCard(data.items)
            })
            
            filter()
            //alert(subscribers[0].statistics.subscriberCount)
        }
        const filter = () => {
            let duplicate = false
            let index = 1
            filterMiniCardData[0] = miniCardData[0]
            //alert(miniCardData[0])
            for(let i = 1; i < miniCardData.length; i++) {
                if(index <= 4){
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
            }
            //alert(filterMiniCardData.length)
            
            
            for(let i = 0; i < filterMiniCardData.length; i++) {
                //alert(filterData[i].snippet.channelId)
                fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${filterMiniCardData[i].snippet.channelId}&key=AIzaSyBFVDyp48Uk0a9rcGcP9a4lKdKkRQRG4FU`)
                .then(response=>response.json())
                .then(result=>{
                    setSubData(result.items)
                })
            }
            for(let i = 0; i < subscribers.length; i++) {
                let min = i;
                for(let j = i+1; j < subscribers.length; j++){
                    if(subscribers[j].statistics.hiddenSubscriberCount == 'false' && subscribers[min].statistics.hiddenSubscriberCount == 'false')
                        if(subscribers[j].statistics.subscriberCount < subscribers[min].statistics.subscriberCount) {
                            min=j; 
                        }
                 }
                 if (min != i) {
                     let tempS = subscribers[i]; 
                     let tempF = filterMiniCardData[i];
                     subscribers[i] = subscribers[min];
                     filterMiniCardData[i] = filterMiniCardData[min];
                     subscribers[min] = tempS;
                     filterMiniCardData[min] = tempF;    
                }
            }
            filterCard(filterMiniCardData)
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
                data={filterData} 
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