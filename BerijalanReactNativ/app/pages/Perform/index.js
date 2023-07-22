import { View, Text, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import React from "react";
import { Back } from "../../assets/svg";

export default function Add() {
  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <ScrollView>
        {/* HEADER ADD TASK VIEW */}
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Productivity</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 16,
    marginTop: 40,
    paddingHorizontal: 20
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "700",
    flex: 1
  }
})