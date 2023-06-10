import { View, Text, ScrollView, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Input from '../components/input'
import Button from '../components/button'
import styles from './styles'

const Login = (props) => {
    const {
        navigation
    } = props
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    useEffect(() => {
        const loginData = async () => {
            const data = await AsyncStorage.getItem('logindata')
            if (data) {
              //navigation
            }
        }
        loginData();
    }, [])

    const onLogin = async() => {
        if (email && password) {
            if(email==='abc@gmail.com' && password==='abc'){
                await AsyncStorage.setItem('logindata', JSON.stringify({email:email,password:password}))
              //navigation
            }else{
                Alert.alert('', "Please enter valid email and password", [{
                    text: "Ok",
                }, {
                    text: "Cancel",
                }]) 
            }
        } else {
            Alert.alert('', "Please enter email and password", [{
                text: "Ok",
            }, {
                text: "Cancel",
            }])
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={styles.upperHalf}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>Logo</Text>
                    </View>
                </View>
                <View style={styles.lowerHalf}>
                    <View style={styles.inputContainer}>
                        <Input value={email} onChangeText={(text) => setEmail(text)} placeholder={'Email'} />
                        <Input secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} placeholder={'Password'} componentStyle={styles.secInput} />
                        <Button text={'Login'} onClick={onLogin} componentStyle={styles.loginButton} isloader={false} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login