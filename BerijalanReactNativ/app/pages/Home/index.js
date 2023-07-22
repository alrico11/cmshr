import { View, Text, TextInput, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Group, TaskHome } from "../../assets/svg";
import images from "../../assets/image";
export default function Home() {
  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      {/* HEADER HOME VIEW */}
      <View style={{ marginTop: 30, marginLeft: 16, justifyContent: "space-between", padding: 5, flexDirection: "row" }}>
        <TaskHome width={52} height={52} />
        <View style={{ marginLeft: 36, flexDirection: 'row', alignItems: 'center' }}>
          <Group />
          <TextInput
            style={styles.rectang}
            placeholder="Find Your Projects"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      {/* DASHBOARD HOME VIEW */}
      <View style={{ marginHorizontal: 16, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text bold style={styles.text}>Projects</Text>
          <View bold style={[styles.rectang2, { fontSize: 15 }]}>
            <Text bold style={{ fontSize: 15, fontWeight: 700 }}>+ Add</Text>
          </View>
        </View>
        <Text bold style={{ fontSize: 16, color: "#A7A7A7", fontWeight: 700 }}>You have 6 projects</Text>
        <ScrollView
          horizontal={true}>
          <View style={[styles.recProject, { backgroundColor: "#3CB8D3" }]}>
            <Text style={styles.TextProject}>Berijalan</Text>
            <Text style={styles.TextProject1}>Berijalan Project</Text>
            <View style={{marginTop:20}}>

            <Image
              source={images.PERSON3} style={styles.otherPerson}
            ></Image>
            <Image
              source={images.PERSON4} style={styles.otherPerson}
            ></Image>
            <Image
              source={images.PERSON5} style={styles.otherPerson}
            ></Image>
            </View>
            <View>
              <View style={styles.viewProject}></View>
            </View>
          </View>
          <View style={[styles.recProject, { backgroundColor: "#47C9A5" }]}></View>
          <View style={[styles.recProject, { backgroundColor: "#032A50" }]}></View>
        </ScrollView>
        <Text style={styles.text}>Time Management</Text>
      </View>
      {/* SPRINT VIEW */}
      <View>
        <ScrollView
          horizontal={true} >
          <Text style={styles.textSprint}>Sprint 1</Text>
          <Text style={styles.textSprint}>Sprint 2</Text>
          <Text style={styles.textSprint}>Sprint 3</Text>
          <Text style={styles.textSprint}>Sprint 4</Text>
          <Text style={styles.textSprint}>Sprint 5</Text>
          <Text style={styles.textSprint}>Sprint 6</Text>
          <Text style={styles.textSprint}>Sprint 7</Text>
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 }}>
        <Text style={[styles.dateSprint, { marginTop: 29 }]}>Apr, 13 - 14</Text>
        <View style={styles.statusRec}>
          <Text style={styles.dateSprint}> In Progress </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewProject: {
    marginTop: 20,
    width: 205,
    height: 62,
    borderRadius: 12,
    backgroundColor:"#C16262",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
    flexDirection:"row",
    // justifyContent: "center",
    alignSelf:"center",
    marginTop:75
  },
  otherPerson: {
    width: 35,
    height: 35,
    borderRadius: 90,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    marginTop: -15
    // marginRight: 15,
    // marginTop: 17,
    // marginBottom: 17,
  },
  othersPerson: {
    // marginLeft: -33,
    // marginRight: 18,
    // marginTop: 18,
    // marginBottom: 26,
  },
  TextProject: {
    fontSize: 24,
    color: "#FFF",
    marginTop: 20,
    marginLeft: 20,
  },
  TextProject1: {
    fontSize: 16,
    color: "#D3D3D3",
    marginLeft: 20,
  },
  statusRec: {
    marginTop: 20,
    width: 168,
    height: 44,
    alignSelf: "center",
    paddingHorizontal: 10,
    backgroundColor: "#FFFF",
    borderRadius: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#A7A7A7",
    justifyContent: "center",
    align: "center"
  },
  dateSprint: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "700",
  },
  textSprint: {
    fontSize: 14,
    fontWeight: "700",
    color: "#909090",
    marginHorizontal: 40,
    padding: 1
  },
  text:
    { fontSize: 30, fontWeight: "700" },
  rectang: {
    backgroundColor: "#F5F3F6",
    alignSelf: "center",
    // marginTop: 50,
    width: 275,
    height: 52,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  rectang2: {
    alignSelf: "center",
    // marginTop: 50,
    width: 94,
    height: 37,
    paddingHorizontal: 10,
    backgroundColor: "#F5F3F6",
    borderRadius: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  recProject: {
    marginTop: 20,
    width: 215,
    height: 295,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: 16,
    marginBottom: 26
  },

})