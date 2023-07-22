import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import images from '../../assets/image';
import { HEIGHT, WIDTH } from '../../assets/styles';
import axios from 'axios';
import Main from '../Main';
import Register from '../Register';
import { Eye, EyeSlash } from '../../assets/svg';

export default function Login({ navigation, router }) {
    const [isEnable, setIsEnable] = useState(true)
    const [showPass, setshowPass] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        axios.post("https://finalprojectproductzilla-production.up.railway.app/api/login", {
            email,
            password
        }).then(response => {
            if (response.data.status === "User Login Successfully") {
                console.log(response.data);
                Alert.alert(response.data.status);
                navigation.navigate('Main');
            }
        }).catch(error => {
            console.log(error);
            Alert.alert('Login Failed', 'Please try again.');
        });
    };

    return (
        <View>
            <ImageBackground resizeMode='cover' source={images.BGLOGIN} style={styles.background}>
                <View style={{ paddingHorizontal: 31 }}>
                    <View style={styles.viewForm}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            placeholder='Enter Your Email'
                            placeholderTextColor='#D3D3D3'
                            style={styles.inputForm}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View style={styles.viewForm1}>
                        <Text style={styles.text}>Password</Text>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            
                        }}>
                            <TextInput
                                isEnable={setIsEnable}
                                placeholder='Enter Your Password'
                                placeholderTextColor='#D3D3D3'
                                style={styles.inputForm}
                                secureTextEntry={showPass}
                                value={password}
                                autoCapitalize='none'
                                onChangeText={text => setPassword(text)}
                            />
                            <TouchableOpacity onPress={() => setshowPass(!showPass)}>
                                {showPass ? (
                                    <Eye marginRight={80} marginTop={15} width={20} height={20} stroke={"#FFF"}></Eye>
                                ) : (
                                    <EyeSlash marginRight={80} marginTop={15} width={20} height={20} stroke={"#FFF"} > </EyeSlash>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textForgotPass}>Forgot Password?</Text>
                    </View>
                    <TouchableOpacity style={[styles.btnLogin, opacity = isEnable ? 1 : 0.5]}
                        disabled={!isEnable}
                        onPress={handleLogin}
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.signUptext}>Don't Have an Account? </Text>
                        <Text style={styles.signUptext1} onPress={() => { navigation.navigate('Register') }}>Sign Up</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    signUptext: {
        color: "#FFFF",
        fontSize: 14,
        fontWeight: "700"
    },
    signUptext1: {
        color: "#F6E58D",
        fontSize: 14,
        fontWeight: "700"
    },
    loginText: {
        color: "#261A31",
        fontSize: 16,
        fontWeight: "700"
    },
    btnLogin: {
        // marginTop: 20,
        backgroundColor: "#18DCFF",
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
        width: 343,
        height: 46,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: "center",
        // marginBottom: 20
    },
    textForgotPass: {
        color: "#F6E58D",
        fontSize: 10,
        fontWeight: "700",
        marginLeft: 5,
        marginVertical: 5
    },
    background: {
        width: WIDTH,
        height: HEIGHT,
        paddingTop: 90,
    },
    viewForm: { marginTop: 78 },
    viewForm1: { marginTop: 27 },
    text: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 8
    },
    inputForm: {
        fontWeight: "700",
        color: "#FFF",
        borderColor: "#132040",
        backgroundColor: "#273C75",
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
        width: 343,
        height: 46,
        paddingLeft: 12,
    }
})