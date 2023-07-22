import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import images from '../../assets/image';
import { HEIGHT, WIDTH } from '../../assets/styles';
import axios from 'axios';
import Main from '../Main';
import Register from '../Register';
import { Eye, EyeSlash } from '../../assets/svg';
import Satellite from '../../services/Satellite';


export default function Login({ navigation, router }) {
    const [isEnable, setIsEnable] = useState(true)
    const [showPass, setshowPass] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!errorEmail && !errorPassword) {
            // console.log("NO ERROR");
            setIsEnable(true)
        } else {
            // console.log("ERROR");
            setIsEnable(false)
        }
    }, [errorEmail, errorPassword])

    onSubmit = async () => {
        setIsLoading(true)
        const body = {
            email: email,
            password: password
        }
        // console.log("body ", JSON.stringify(body, null,2));
        // try{
        //     const res = await Satellite.post("auth/login",body)
        //     // console.log(res.data);
        //     if(res.status != 200){
        //         Alert.alert("LOGIN ERROR")
        //     }else {
        //         navigation.navigate('Main')
        //     }
        // }catch(err){
        //     console.log("ERROR", err);
        // }finally{
        //     console.log("Response", res.status);
        // }
        let ress
        await Satellite.post("auth/login", body)
            .then((res) => {
                console.log(res.status);
                ress = res.status
                if (ress != 200) {
                    setErrorEmail("Invalid Email or Password")
                    setErrorPassword("Invalid Email or Password")
                } else {
                    navigation.navigate('Main')
                }
            })
            .catch((err) => {
                setErrorPassword("Invalid Email or Password")
            })
            .finally(() => {
               
                setIsLoading(false)
            })
    }
    return (
        <View>
            <ImageBackground resizeMode='cover' source={images.BGLOGIN} style={styles.background}>
                <View style={{ paddingHorizontal: 31 }}>
                    <View style={styles.viewForm}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            placeholder='Enter Your Email'
                            placeholderTextColor='#D3D3D3'
                            style={[styles.inputForm, { borderColor: errorEmail ? "#EA8685" : "#132040" }]}
                            // value={email}
                            onChangeText={(value) => {
                                setEmail(value)
                                const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                                if (value === "") {
                                    setErrorEmail("Email Must Be Filled")
                                    return;
                                }
                                if (!emailRegex.test(value)) {
                                    setErrorEmail("Invalid Mail Address")
                                    return;
                                }
                                setErrorEmail("");
                            }}

                        />
                    </View>
                    <Text style={{ color: "#EA8685", textAlign: "right", fontSize: 10 }}>{errorEmail}</Text>
                    <View style={[styles.viewForm1, { borderColor: errorEmail ? "#EA8685" : "#132040" }]}>
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
                                // value={password}
                                autoCapitalize='none'
                                onChangeText={(value) => {
                                    setPassword(value)
                                    if (value === "") {
                                        setErrorPassword("Password Must Be Filled")
                                        return;
                                    }
                                    setErrorPassword("");
                                }}
                            />

                            <TouchableOpacity onPress={() => setshowPass(!showPass)}>
                                {showPass ? (
                                    <Eye marginLeft={-30} width={20} height={20} stroke={"#FFF"}></Eye>
                                ) : (
                                    <EyeSlash marginLeft={-30} width={20} height={20} stroke={"#FFF"} > </EyeSlash>
                                )}
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.textForgotPass}>Forgot Password?</Text>
                        <Text style={{ color: "#EA8685", fontSize: 10 }}>{errorPassword}</Text>

                    </View>
                    <TouchableOpacity style={[styles.btnLogin, { opacity: isEnable ? 1 : 0.1 }]}
                        disabled={!isEnable || isLoading}
                        onPress={onSubmit}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#261A31" />
                        ) :
                            (
                                <Text style={styles.loginText}>Login</Text>
                            )
                        }
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
        backgroundColor: "#273C75",
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
        width: 343,
        height: 46,
        paddingLeft: 12,
    }
})