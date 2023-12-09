import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Header() {
  return (
    <View style={styles.container}>
        <Entypo name="notification" size={30} color="#efefef" style={styles.icon}/>
        <Text style={styles.heading}>Meet & Chat</Text>
        <Entypo style={styles.icons} name="new-message"size={30} color="#efefef"/>
        
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:40,
        paddingHorizontal:0
        
    },
    heading:{
        color:'#efefef',
        fontSize:20,
        fontWeight:"700",
        
    },
   icon:{
    paddingRight:70
   },
   icons:{
    paddingLeft:70
   }
})