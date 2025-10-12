import React from 'react'
import { View, Text, Image } from 'react-native';

export default function bt1() {
  return (
    <>
    <View 
    style={{
      flexDirection:'column',
     padding:10, alignItems:'center',
     backgroundColor:'#f0f0f0', 
     borderRadius:10, margin:10}}>
    <View>
        <Image
         source={{ uri: "https://picsuam.photos/100" }}
         style={{width:100, height:100, borderRadius:50}} />
    </View>
    <View>
        <Text>Nguyễn Văn A  </Text>
        <Text> React Native Developer | UI/UX Enthusiast</Text>
    </View>
    </View>

    </>
  )
}
