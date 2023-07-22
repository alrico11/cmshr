import { View, Text, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import React from "react";
import { Back } from "../../assets/svg";

export default function Add() {
  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <ScrollView>
        {/* HEADER ADD TASK VIEW */}
        <View style={styles.header}>
          <Back />
          <Text style={styles.titleHeader}>Time Sheet Form</Text>
        </View>
        {/* View Form Content */}
        <View style={styles.formContent}>
          <Text style={styles.text}>Tittle</Text>
          <TextInput placeholder="Input Task Tittle" style={styles.inputForm}></TextInput>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.text}>Date</Text>
          <TextInput placeholder="Select Date" style={styles.inputForm}></TextInput>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.text}>Time</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <TextInput placeholder="Start" style={styles.inputTime}></TextInput>
            <Text bold style={{ marginTop: 20 }}>-</Text>
            <TextInput placeholder="End" style={styles.inputTime}></TextInput>
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.text}>Status</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <TextInput placeholder="Status" style={styles.inputForm}></TextInput>
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.text}>Activities</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <TextInput placeholder="Write Your Activities" style={[styles.inputBox, { textAlignVertical: 'top', paddingTop: 10 }]}></TextInput>
          </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    flex: 1
  },
  formContent: {
    marginHorizontal: 16,

  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  inputForm: {
    marginTop: 8,
    backgroundColor: "#F5F3F6",
    width: 343,
    height: 46,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    marginBottom: 27,
  },
  inputBox: {
    position: "relative",
    marginTop: 8,
    backgroundColor: "#F5F3F6",
    width: 343,
    height: 146,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    marginBottom: 27,
  },
  inputTime: {
    marginTop: 8,
    backgroundColor: "#F5F3F6",
    width: 151,
    height: 46,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    marginBottom: 27,
  }
})