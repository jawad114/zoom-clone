import React, { useEffect, useState, useRef } from 'react';
import {Modal, View,Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import StartMeeting from '../components/StartMeeting';
import { Socket, io } from 'socket.io-client';
import { Camera, CameraType } from 'expo-camera';
import { Alert } from 'react-native-web';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Chat from '../components/Chat';

const menuIcons=[
    {
        id:1,
        name:"microphone",
        title:"Mute",
        customColor:"#efefef"
    },
    {
        id:2,
        name:"video-camera",
        title:"Stop Video",
        
    },
    {
        id:3,
        name:"upload",
        title:"Share Content",
        
    },
    {
        id:4,
        name:"group",
        title:"Participants",
        
    }
]
export default function MeetingRoom() {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    const [activeUser, setActiveUser]=useState(["Jawad"]);
    const [startCamera, setStartCamera]=useState(false);
    const [modalVisible, setModalVisible]=useState(false);
    const socketRef = useRef(null);

    const _startCamera=async()=>{
        const {status}=await Camera.requestCameraPermissionsAsync();
        if(status === "granted"){
            setStartCamera(true)
        }else{
            Alert.alert("Acess Denied");
        }
    }
    const openMeeting = () => {
        _startCamera();
        if (socketRef.current) {
            socketRef.current.emit('join-room', { roomId: roomId, userName: name });
        }
    };

    useEffect(() => {
        const API_URL = "https://260c-121-52-147-62.ngrok-free.app/";
        socketRef.current = io(API_URL);

        console.warn("Hello Jawad ");

        socketRef.current.on('connect', () => {
            console.log("Connected");
        });
        socketRef.current.on('all-users', users=>{
            console.log("Active Users");
            console.log(users);
            setActiveUser(users);
        })
        return () => {
            // Clean up the socket on component unmount
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
       
    }, []);

    return (
        <View style={styles.container}>
        {startCamera ?(
            <SafeAreaView style={{flex:1}}>
            <Modal animationType="slide" transparent={false} presentationStyle={"fullScreen"} visible={modalVisible} onRequestClose={()=>{
                Alert.alert("Modal has been closed");
                setModalVisible(!modalVisible);
            }}>
            <Chat modalVisible={modalVisible} setModalVisible={setModalVisible}/>

            </Modal>
            <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
            <Camera type={"front"} style={{width: activeUser.length==1 ?"100%":200, height: activeUser.length==1?500:200}}>
            </Camera>
            {activeUser.filter(user=>user.userName!=name).map((user,index)=>
                <View key={index} style={styles.activeUserContainer}>
                    <Text style={{color:"white"}}>
                        {user.userName}
                    </Text>
                </View>
            )}
            </View>
            </View>
            <View style={styles.menu}>
            {menuIcons.map((icon, index)=>
                <TouchableOpacity key={index} style={styles.tile}>
                    <FontAwesome name={icon.name} size={24} color={"#efefef"}/>
                    <Text style={styles.textTile}>{icon.title}</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.tile}>
                    <FontAwesome name={"comment"} size={24} color={"#efefef"}/>
                    <Text style={styles.textTile}>Chat </Text>
            </TouchableOpacity> 
            </View>
            </SafeAreaView>
        ) :  <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                openMeeting={openMeeting}
            />}
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1
    },
    tile:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:15,
    },
    textTile:{
        color:"white",
        marginTop:10
    },
    menu:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    cameraContainer:{
        
        
        backgroundColor:'black',
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center'
    },
    activeUserContainer:{
        flex:1,
        width:"100%",
        // justifyContent:'center',
        // alignItems:'center',

    },

    activeUserContainer:{
        borderColor:'gray',
        borderWidth:1,
        width:200,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    }
});
