import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const MiniCard = (props)=>{
    return(
        <View style={{flexDirection:"row",margin:10}}>
            <Image
                source={{uri:props.thumbnail}}
                style={{
                    width:"45%",
                    height:100
                }}/>
            <View style={{paddingLeft:7,width:Dimensions.get("window").width/2}}>
                <Text style={{
                    fontSize:20,
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                >{props.channel}</Text>
                <Text style={{fontSize:13}}>{props.title}</Text>
                {/* <Text style={{fontSize:13}}>Subscribers: {props.subscribers}</Text> */}
                
            </View>
        </View>
    )
    
}

export default MiniCard