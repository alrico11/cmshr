import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator, Alert, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
import images from '../../assets/image'
import { ArrowLeft } from '../../assets/svg'
import { HEIGHT, WIDTH } from '../../assets/styles';
import { Eye, EyeSlash } from '../../assets/svg';
import Satellite from '../../services/Satellite';

export default function Register({ navigation }) {
    const [showPass, setshowPass] = useState(true)
    const [isEnable, setIsEnable] = useState(true)

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nik, setNik] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorNik, setErrorNik] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const scrollViewRef = useRef(null);
    const handleInputFocus = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    useEffect(() => {
        if (!errorEmail && !errorPassword
            && !errorName
            && !errorPhone
            && !errorNik
            && !errorConfirmPassword
        ) {
            setIsEnable(true)
        } else {
            setIsEnable(false)
        }
    }, [errorEmail, errorPassword])

    onSubmit = async () => {
        setIsLoading(true)
        const body = {
            doSendRegister: {
                name: name,
                email: email,
                phoneNumber: phone,
                password: password,
                nik: nik
            }
        }
        let ress
        await Satellite.post("auth/register", body)
            .then((res) => {
                ress = res.status
                if (ress == 200) {
                    console.log(res.data)
                    Alert.alert("REGISTER SUKSES SILAHKAN LOGIN")
                    navigation.navigate('Login')
                } else {
                    Alert.alert("ADA YANG SALAH")
                }
            }).finally(() => {
                setIsLoading(false)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <ImageBackground resizeMode='cover' source={images.BGLOGIN} style={styles.background}>
            <TouchableOpacity>
                <ArrowLeft style={styles.arrow} onPress={() => navigation.navigate('Login')} />
            </TouchableOpacity>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <ScrollView ref={scrollViewRef}
                    keyboardShouldPersistTaps="handled">
                    <View>

                        {/* View Form */}
                        <View style={styles.viewForm}>
                            <Text style={styles.text}>Name</Text>
                            <TextInput
                                fontWeight="700"
                                placeholder='Enter Your Name'
                                placeholderTextColor='#D3D3D3'
                                style={[styles.inputForm, { borderColor: errorName ? "#EA8685" : "#132040" }]}
                                onChangeText={(value) => {
                                    setName(value)
                                    if (value === "") {
                                        setErrorName("Name Must Be Filled")
                                        return;
                                    }
                                    setErrorName("");
                                }}
                            >
                            </TextInput>
                            <Text style={{ marginTop: -20, color: "#EA8685", textAlign: "right", fontSize: 10 }}>{errorName}</Text>
                            {/* EMAIL SECTION */}
                            <Text style={styles.text}>Email</Text>
                            <TextInput
                                fontWeight="700"
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
                            >
                            </TextInput>
                            <Text style={{ marginTop: -20, color: "#EA8685", textAlign: "right", fontSize: 10 }}>{errorEmail}</Text>
                            {/* Phone Section */}
                            <Text style={styles.text}>Phone</Text>
                            <TextInput
                                fontWeight="700"
                                placeholder='Enter Your Phone'
                                placeholderTextColor='#D3D3D3'
                                style={[styles.inputForm, { borderColor: errorPhone ? "#EA8685" : "#132040" }]}
                                maxLength={12}
                                onChangeText={(value) => {
                                    const regPass = /^[0-9]{0,12}$/
                                    setPhone(value);
                                    if (!regPass.test(value)) {
                                        setErrorPhone("Phone Must be Number");
                                        return;
                                    }
                                    if (value.length != 12 || value == "") {
                                        setErrorPhone("Phone Must be 12 Digit");
                                        return;
                                    }
                                    setErrorPhone("")
                                }}
                            >
                            </TextInput>
                            <Text style={{ marginTop: -20, color: "#EA8685", textAlign: "right", fontSize: 10 }}>{errorPhone}</Text>
                            <Text style={styles.text}>NIK</Text>
                            <TextInput
                                fontWeight="700"
                                placeholder='Enter Your NIK Number'
                                placeholderTextColor='#D3D3D3'
                                style={[styles.inputForm, { borderColor: errorNik ? "#EA8685" : "#132040" }]}
                                maxLength={16}
                                onChangeText={(value) => {
                                    const regPass = /^[0-9]{0,16}$/
                                    setNik(value);
                                    if (!regPass.test(value)) {
                                        setErrorNik("NIK Must be Number");
                                        return;
                                    }
                                    if (value.length != 16 || value == "") {
                                        setErrorNik("NIK Must be 16 Digit");
                                        return;
                                    }
                                    setErrorNik("")
                                }}
                            >
                            </TextInput>
                            <Text style={{ marginTop: -20, color: "#EA8685", textAlign: "right", fontSize: 10 }}>{errorNik}</Text>
                            <Text style={styles.text}>Password</Text>
                            <View style={{ flexDirection: "row", }}>
                                <TextInput
                                    onFocus={handleInputFocus}
                                    isEnable={setIsEnable}
                                    fontWeight="700"
                                    placeholder='Password'
                                    secureTextEntry={showPass}
                                    autoCapitalize='none'
                                    placeholderTextColor='#D3D3D3'
                                    style={[styles.inputForm, { borderColor: errorPassword ? "#EA8685" : "#132040" }]}
                                    onChangeText={(value) => {
                                        setPassword(value)
                                        if (value === "" || value.length < 6) {
                                            setErrorPassword("Minimum Password length is 6 characters.")
                                            return;
                                        }
                                        setErrorPassword("");
                                    }}
                                />
                                <TouchableOpacity onPress={() => setshowPass(!showPass)}>
                                    {showPass ? (
                                        <Eye marginLeft={-30} marginTop={15} width={20} height={20} stroke={"#FFF"}></Eye>
                                    ) : (
                                        <EyeSlash marginLeft={-30} marginTop={15} width={20} height={20} stroke={"#FFF"} > </EyeSlash>
                                    )}
                                </TouchableOpacity>
                            </View>
                            <Text style={{ marginTop: -20, color: "#EA8685", textAlign: "right", fontSize: 10 }}>{errorPassword}</Text>

                            <Text style={styles.text}>Confirm Password</Text>
                            <View style={{ flexDirection: "row", }}>
                                <TextInput
                                    onFocus={handleInputFocus}
                                    isEnable={setIsEnable}
                                    autoCapitalize='none'
                                    fontWeight="700"
                                    placeholder='Confirm Password'
                                    secureTextEntry={showPass}
                                    placeholderTextColor='#D3D3D3'
                                    style={[styles.inputForm, { borderColor: errorConfirmPassword ? "#EA8685" : "#132040" }]}
                                    onChangeText={(value) => {
                                        setConfirmPassword(value)
                                        if (value != password) {
                                            setErrorConfirmPassword("Password didnt matches")
                                            return;
                                        }
                                        if (value == "") {
                                            setErrorConfirmPassword("Confirm Password Must be Filled")
                                            return;
                                        }
                                        setErrorConfirmPassword("");
                                    }}
                                />
                                <TouchableOpacity onPress={() => setshowPass(!showPass)}>
                                    {showPass ? (
                                        <Eye marginLeft={-30} marginTop={15} width={20} height={20} stroke={"#FFF"}></Eye>
                                    ) : (
                                        <EyeSlash marginLeft={-30} marginTop={15} width={20} height={20} stroke={"#FFF"} > </EyeSlash>
                                    )}
                                </TouchableOpacity>
                            </View>
                            <Text style={{ marginTop: -20, color: "#EA8685", textAlign: "right", fontSize: 10, marginBottom: 20 }}>{errorConfirmPassword}</Text>

                            <TouchableOpacity style={[styles.btnRegister, { opacity: isEnable ? 1 : 0.1 }]}
                                disabled={!isEnable || isLoading}
                                onPress={onSubmit}
                            >
                                {isLoading ? (
                                    <ActivityIndicator size="small" color="#261A31" />
                                ) :
                                    (
                                        <Text style={styles.loginText}>Register</Text>
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '80%',
    },
    btnRegister: {
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

    },
    loginText: {
        color: "#261A31",
        fontSize: 16,
        fontWeight: "700"
    },
    text: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: "700",
        marginBottom: 8,
    },
    viewForm: {
        marginHorizontal: 31,
        justifyContent: "center",
        alignSelf: "center"
    },
    arrow: {
        color: "#FFF",
        width: 500,
        height: 14,
        marginBottom: 20,
        marginLeft: 35,
        marginTop: 53
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
        marginBottom: 27
    },
    background: {
        width: WIDTH,
        height: HEIGHT
    },
})