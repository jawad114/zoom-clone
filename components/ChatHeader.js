import React from 'react'
import {Pressable,View,Text, StyleSheet} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
export default function ChatHeader({setModalVisible}) {
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>setModalVisible(false)}>
        <Text style={styles.buttonText}>close</Text>
        </Pressable>
        <Text style={styles.heading}>Chat</Text>
        <Entypo name="bell" size={25} color="#efefef"/>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10
    },
    heading:{
        color:'white',
        fontSize:20,
        fontWeight:"700"
    },
    buttonText:{
        color:"white",
        fontSize:20
    }
})