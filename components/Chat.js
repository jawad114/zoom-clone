import React from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'
import ChatHeader from './ChatHeader'
export default function Chat({setModalVisible}) {
  return (
    <View style={styles.container}>
    <SafeAreaView style={{height:"100%"}}>
        <ChatHeader setModalVisible={setModalVisible}/>
        </SafeAreaView>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1c1c1c"
    }
})
