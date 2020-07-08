import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = (props) => {

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const jsonValue = await AsyncStorage.getItem('@usertype');
        if (JSON.parse(jsonValue) == 'Client') {
            props.navigation.navigate('ClientDrawer');
        } else if (JSON.parse(jsonValue) == 'Agent') {
            props.navigation.navigate('AgentDrawer');
        } else {
            props.navigation.navigate('AuthStack');
        }
    }

    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            <ActivityIndicator size='large' />
        </View >
    )
}

export default Splash;