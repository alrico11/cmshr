import { SafeAreaProvider } from "react-native-safe-area-context"
import React from 'react'
import IndexLayout from "./app/index"

export default function App() {
  return (
  <SafeAreaProvider style={{flex:1}}>
    <IndexLayout />
  </SafeAreaProvider>
  );
}