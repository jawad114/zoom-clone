import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import MeetingRoom from './screens/MeetingRoom'
import {View, Text,StyleSheet,SafeAreaView} from 'react-native'
export default function Navigation() {
    const Stack=createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName={Home}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Room" style={styles.container} component={MeetingRoom} options={{ title:"Start Meeting",headerTitleAlign: 'center',headerStyle:{backgroundColor:"black"},headerTintColor:"white"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center'

    }
})
