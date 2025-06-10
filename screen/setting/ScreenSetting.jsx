import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenSetting() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>ScreenSetting</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        color: 'rgb(255, 0, 0)',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})