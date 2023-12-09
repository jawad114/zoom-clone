import React from 'react'
import { io } from 'socket.io-client';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function StartMeeting({name,roomId,setName,setRoomId,openMeeting}) {
   
  return (
    <View style={styles.startMettingContainer}>
    <View style={styles.info}>
        <TextInput style={styles.textInput} value={name} placeholder="Enter Name" placeholderTextColor="#767476" onChangeText={text=>setName(text)}/>
    </View>
    <View style={styles.info}>
        <TextInput style={styles.textInput} value={roomId} placeholder="Enter room Id" placeholderTextColor="#767476" onChangeText={text=>setRoomId(text)}/>
    </View>
    <View style={{alignItems:"center"}}>
        <TouchableOpacity onPress={()=>openMeeting()} style={styles.startMettingButton}>
            <Text style={{color:"white",fontWeight:"bold"}}>Start Meeting</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

const styles=StyleSheet.create({
    info:{
        width:"100%",
        backgroundColor:"#373538",
        height:50,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#484648",
        padding:12,
        justifyContent:'center'
    },
    textInput:{
        color:"white",
        fontSize:18
    },
  
    startMettingButton:{
        width:350,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#0470DC",
        height:50,
        borderRadius:15
    }
})
