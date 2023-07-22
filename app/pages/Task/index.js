import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Flag, TaskHome } from "../../assets/svg";

export default function Task() {
  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <ScrollView>
        {/* HEADER Task VIEW */}
        <View style={{ marginTop: 40, marginBottom: 18, marginHorizontal: 16, }}>
          <Text bold style={{ fontSize: 30, fontWeight: 700 }}>Time Sheet</Text>
        </View>
        {/* Body Task VIEW */}
        <View style={{ marginBottom: 16, marginHorizontal: 16 }}>
          <View style={styles.rectang}>
            <View style={{ flexDirection: "row" }}>
              <TaskHome style={{ marginLeft: -15, paddingVertical: 35 }} ></TaskHome>
              <Text style={{ paddingLeft: 5, paddingRight: 35, paddingVertical: 16, fontSize: 16, fontWeight: 700 }}>Develop New Features Mutual Fund Moxa Konven</Text>
            </View>
            {/* Date Task VIEW */}
            <View style={{ flexDirection: "row" }}>
              <Flag style={{ marginTop: 1, marginRight: 6 }}></Flag>
              <Text style={{ fontSize: 11, fontWeight: 600, color: "#7A7A7A" }}>April 04, 2023</Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: 600, marginLeft: 17, marginBottom: 9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            {/* Present Task VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.present, { backgroundColor: "#70A1FF" }]}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: "#FFF" }}>Present</Text>
              </View>
              <View style={styles.time}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: "#FFF" }}>08:00 - 17: 00</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Body Task VIEW */}
        <View style={{ marginBottom: 16, marginHorizontal: 16 }}>
          <View style={styles.rectang}>
            <View style={{ flexDirection: "row" }}>
              <TaskHome style={{ marginLeft: -15, paddingVertical: 35 }} ></TaskHome>
              <Text style={{ paddingLeft: 5, paddingRight: 35, paddingVertical: 16, fontSize: 16, fontWeight: 700 }}>Fixing Issue Mobile</Text>
            </View>
            {/* Date Task VIEW */}
            <View style={{ flexDirection: "row" }}>
              <Flag style={{ marginTop: 1, marginRight: 6 }}></Flag>
              <Text style={{ fontSize: 11, fontWeight: 600, color: "#7A7A7A" }}>April 03, 2023</Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: 600, marginLeft: 17, marginBottom: 9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            {/* Present Task VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.present, { backgroundColor: "#70A1FF" }]}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: "#FFF" }}>Present</Text>
              </View>
              <View style={styles.time}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: "#FFF" }}>08:00 - 17: 00</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Body Task VIEW */}
        <View style={{ marginBottom: 16, marginHorizontal: 16 }}>
          <View style={styles.rectang}>
            <View style={{ flexDirection: "row" }}>
              <TaskHome style={{ marginLeft: -15, paddingVertical: 35 }} ></TaskHome>
              <Text style={{ paddingLeft: 5, paddingRight: 35, paddingVertical: 16, fontSize: 16, fontWeight: 700 }}>On Leave</Text>
            </View>
            {/* Date Task VIEW */}
            <View style={{ flexDirection: "row" }}>
              <Flag style={{ marginTop: 1, marginRight: 6 }}></Flag>
              <Text style={{ fontSize: 11, fontWeight: 600, color: "#7A7A7A" }}>April 02, 2023</Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: 600, marginLeft: 17, marginBottom: 9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            {/* Present Task VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.present, { backgroundColor: "#FDE180" }]}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: "#FFF" }}>Leave</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  rectang: {
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  present: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 17,
    marginBottom: 16,
    width: 56,
    height: 21,

    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  time: {
    backgroundColor: "#CED1D4",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 11,
    marginBottom: 18,
    width: 86,
    height: 21,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});