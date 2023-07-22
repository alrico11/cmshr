import { View, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Text from '../../components/Text'
import images from '../../assets/image'
import { HEIGHT, WIDTH } from '../../assets/styles'

export default function Profile() {
    return (

        <View>
            <ScrollView>
                <ImageBackground
                    source={images.BG_PROFILE}
                    resizeMode='cover'
                    style={styles.background}
                >
                    <View style={{ borderWidth: 2, borderColor: '#FBD2A5', borderRadius: 90 }}>
                        <Image
                            source={images.PERSON2}
                            style={styles.person}
                        ></Image>
                    </View>
                    <Text fontSize={20} bold style={{ marginTop: 16 }}>Ahmad Akbar Maulana</Text>
                    <Text color="#909090" style={{ paddingBottom: 32 }}>React Native Developer</Text>
                </ImageBackground>
               
              <View  style={{ backgroundColor: "#FFF", flex: 1 }}>
                <View style={styles.rectang}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>ID</Text>
                        <Text color="#A7A7A7" style={styles.value}>A20134</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.dividerLine} />
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>Email</Text>
                        <Text color="#A7A7A7" style={styles.value}>siapayaamanyanyah@gmail.com</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.dividerLine} />
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>Date of Birth</Text>
                        <Text color="#A7A7A7" style={styles.value}>3 May 1999</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.dividerLine} />

                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>Gender</Text>
                        <Text color="#A7A7A7" style={[styles.value]}>Male</Text>
                    </View>
                </View>
                <View style={styles.rectang2}>
                    <View style={{ marginTop: -10, marginRight: -16, justifyContent: "space-between", padding: 5, flexDirection: "row" }}>
                        <View>
                            <Text bold style={{ paddingTop: 16 }}>Team</Text>
                            <Text color="#A7A7A7" >React Native</Text>
                        </View>
                        <View>
                        </View>
                        <Image
                            source={images.PERSON3} style={styles.otherPerson}
                        ></Image>
                        <Image
                            source={images.PERSON4} style={[styles.otherPerson, { marginLeft: -30 }]}
                        ></Image>
                        <Image
                            source={images.PERSON5} style={[styles.otherPerson, { marginLeft: -30 }]}
                        ></Image>
                        <View style={[styles.othersPerson, { alignItems: "center", justifyContent: "center", backgroundColor: "red", borderRadius: 90, width: 35, height: 35 }]}>
                            <Text color="#FFFF" >+6</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rectang3}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={images.GUARD}
                                style={styles.btnDown}
                            ></Image>
                            <Text style={styles.label} >Privacy And Security</Text>
                        </View>
                        <Image
                            source={images.VECTOR}
                            color="#292D32"
                            style={{
                                marginTop: 20,
                                width: 5,
                                height: 11,

                            }}
                        ></Image>
                    </View>
                    <View style={{ paddingTop: 9, paddjustifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 311.00644, borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={images.HELP}
                                style={styles.btnDown}
                            ></Image>
                            <Text style={styles.label}>Help</Text>
                        </View>
                        <Image
                            source={images.VECTOR}
                            color="#292D32"
                            style={{
                                marginTop: 20,
                                width: 5,
                                height: 11,
                            }}
                        ></Image>
                    </View>
                    <View style={{ paddingTop: 9, paddjustifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 311.00644, borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={images.ABOUT}
                                style={styles.btnDown}
                            ></Image>
                            <Text style={styles.label}>About Us</Text>
                        </View>
                        <Image
                            source={images.VECTOR}
                            color="#292D32"
                            style={{
                                marginTop: 20,
                                width: 5,
                                height: 11,

                            }}
                        ></Image>
                    </View>
                    <View style={{ paddingTop: 9, paddjustifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 311.00644, borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={images.LOGOUT}
                                style={styles.btnDown}
                            ></Image>
                            <Text style={[styles.label]}>Logout</Text>
                        </View>
                        <Image
                            source={images.VECTOR}
                            color="#292D32"
                            style={{
                                marginTop: 20,
                                width: 5,
                                height: 11,

                            }}
                        ></Image>
                    </View>
                    <View>
                        <Text fontSize={14} bold style={{ paddingTop: 40, alignSelf: "center" }}>v.0.0.1</Text>
                    </View>
                </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        width: WIDTH,
        height: 495,
        paddingTop: 90,
        alignItems: 'center',
    },
    person: {
        width: 120,
        height: 120,
        borderRadius: 90,
    },
    otherPerson: {
        width: 35,
        height: 35,
        borderRadius: 90,
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: "#FFF",
        marginRight: 15,
        marginTop: 17,
        marginBottom: 17,
    },
    othersPerson: {
        marginLeft: -33,
        marginRight: 18,
        marginTop: 18,
        marginBottom: 26,
    },
    rowContainer: {
        justifyContent: "space-between",
        padding: 5,
        flexDirection: "row",
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 16,
    },
    label1: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16,
        alignSelf: 'center',
    },

    value: {
        fontSize: 14,
        color: "#A7A7A7",
        paddingTop: 16,
        paddingLeft: 16,
    },
    divider: {
        paddingTop: 13,
        paddingLeft: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dividerLine: {
        paddingHorizontal: 16,
        height: 1,
        width: 311.00644,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
    },
    rectang: {

        alignSelf: "center",
        marginTop: -200,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 20,
        paddingBottom: 16
    },
    rectang2: {
        alignSelf: "center",
        marginTop: 20,
        width: 343,
        height: 70,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 20,
    },
    rectang3: {
        paddingBottom: 130,
        alignSelf: "center",
        marginVertical: 20,
        marginHorizontal: 12,
        width: 343,
        height: 200,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 130,
        marginHorizontal: 20,
    },
    btnDown: {
        width: 24,
        height: 24,
        borderRadius: 90,
        borderWidth: 1,
        borderColor: "#FFF",
        marginTop: 14,
        marginRight: 11
    }
});