import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Logout = (props) => {

    useEffect(() => {
        onLogout();
    }, []);

    const onLogout = async () => {
        await AsyncStorage.removeItem('@usertype');
        AsyncStorage.clear()
        props.navigation.navigate('Splash');        
    }

    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            <ActivityIndicator size='large' />
        </View >
    )
}

export default Logout;