import React from 'react'
import { Text, View, Image } from 'react-native'

export default function Bt1() {
  return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 10}}>
            <Image source={{uri : 'https://i.pravatar.cc/150'}} style={{width: 200, height: 200, borderRadius: 100, borderColor: "blue"}} />
            <Text style={{fontSize: 24, fontWeight : "bold"}}>Lê Minh Anh</Text>
            <Text>Software Engineer , Mobile Developer</Text>
        </View>
    )
}
