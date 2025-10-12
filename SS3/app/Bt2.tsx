import React from 'react'
import { View , StyleSheet,Text} from 'react-native'

export default function Bt2() {
  return (
    <View>
        <Text style={styles.tiltle}>Lần 1: sắp xếp ngang </Text>
        <View style={styles.boxRow}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
            <View style={styles.box5}></View>
        </View>
        <Text style={styles.tiltle}>Lần 2: sắp xếp dọc </Text>
        <View style={styles.boxColumn}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
            <View style={styles.box5}></View>
        </View>
        <Text style={styles.tiltle}>Lần 3: sắp xếp dạng lưới </Text>
        <View style={styles.boxWrap}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
            <View style={styles.box5}></View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    tiltle:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    boxColumn:{
        display: 'flex',
        flexDirection: 'column'
    },
    boxRow:{
        display: 'flex',
        flexDirection: 'row'
    },
    boxWrap:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    box1: {
        backgroundColor: '#EF4444',
        width: 100,
        height: 100,
    },
    box2: {
        backgroundColor: '#F97316',
        width: 100,
        height: 100,
    },
    box3: {
        backgroundColor: '#22C55E',
        width: 100,
        height: 100,
    },
    box4: {
        backgroundColor: '#3B82F6',
        width: 100,
        height: 100,
    },
    box5: {
        backgroundColor: '#8B5CF6',
        width: 100,
        height: 100,
    }
})