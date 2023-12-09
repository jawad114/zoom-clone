import React from 'react'
import {View, Text,StyleSheet,SafeAreaView,Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons=[
  {
    type:"starred",
    name: "starred",
  },
  {
    type:'contact',
    name: "Saad Ali",
    photo: require("../assets/1.png")
  },
  {
    type:'contact',
    name: "Jawad Shah",
    photo: require("../assets/2.jpeg")
  },
  {
    type:'contact',
    name: "Afsha",
    photo: require("../assets/3.png")
  },
  {
    type:'contact',
    name: "Wahaj",
    photo: require("../assets/4.jpeg")
  }

]
export default function ContactsMenu() {
  return (
    <View style={styles.container}>
    {contactsMenuButtons.map((contact,index)=>
        <View key={index} style={styles.row}>
        {contact.type=="starred"? 
        (<View style={styles.starredIcon}>
                  <AntDesign name="star" size={30} color="#efefef"/>
            </View>) :
            (
              <Image source={contact.photo} style={styles.image}/>
            )
            }
            
            <Text style={styles.text}>
              {contact.name}
            </Text>
        </View>
        )}
    </View>
  )
}

const styles=StyleSheet.create({
  container:{

  },
  row:{
    flexDirection:'row',
    marginTop:20,
    alignItems:'center'
  },
  starredIcon:{
    backgroundColor:"#333333",
    width:55,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  text:{
    color:'white',
    paddingLeft:15,
    fontSize:18
  },
  image:{
    width:55,
    height:55,
    borderRadius:20
  }
})