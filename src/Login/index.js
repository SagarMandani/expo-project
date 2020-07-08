
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import AsyncStorage from "@react-native-community/async-storage";

const Login = (props) => {
    
    const [userType, setUserType] = useState('Client');

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@usertype', value)
        } catch (e) {
        }
    }

    const onLogin = async () => {
        const jsonValue = JSON.stringify(userType)
        storeData(jsonValue);
        props.navigation.navigate('Splash');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, marginBottom: 20 }}>Login</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setUserType('Client')}>
                    <MaterialIcons name={userType == 'Client' ? "radio-button-checked" : "radio-button-unchecked"} size={24} color="black" />
                    <Text>Client</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }} onPress={() => setUserType('Agent')}>
                    <MaterialIcons name={userType == 'Agent' ? "radio-button-checked" : "radio-button-unchecked"} size={24} color="black" />
                    <Text>Agent</Text>
                </TouchableOpacity>
            </View>
            <Button style={{ marginTop: 20 }} mode="contained" onPress={() => onLogin()}>
                Login
            </Button>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});