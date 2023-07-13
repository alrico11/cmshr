import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {Fonts} from './assets/styles/index'

export default function IndexLayout() {
  return (
    <View style={{marginTop: 40}}>
      <Text>App</Text>
      <Text style={{fontSize:24,fontFamily:Fonts.Nunito.BoldItalic}}>Ini Test Fonts</Text>
    </View>
  )
}