import React, { useEffect } from "react";
import { Button, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Home from "./src/Home";
import About from "./src/About";
import Contact from "./src/Contact";
import Login from './src/Login'
import Logout from './src/Logout'
import Notifications from './src/Notifications'
import Splash from './src/Splash'
import CustomSidebarMenu from './CustomSidebarMenu';
import { createSwitchNavigator, createCompatNavigatorFactory } from '@react-navigation/compat';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

global.currentScreenIndex = 0;

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
}

const firstScreenStack = createCompatNavigatorFactory(createStackNavigator)({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const secondScreenStack = createCompatNavigatorFactory(createStackNavigator)({
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => ({
            title: 'About Screen',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const threeScreenStack = createCompatNavigatorFactory(createStackNavigator)({
    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => ({
            title: 'Contact Screen',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const fourScreenStack = createCompatNavigatorFactory(createStackNavigator)({
    Notifications: {
        screen: Notifications,
        navigationOptions: ({ navigation }) => ({
            title: 'Notifications Screen',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const AgentDrawer = createCompatNavigatorFactory(createDrawerNavigator)(
    {
        Home: {
            screen: firstScreenStack,
            navigationOptions: {
                drawerLabel: 'Home',
            },
        },
        About: {
            screen: secondScreenStack,
            navigationOptions: {
                drawerLabel: 'About',
            },
        },
        Logout: {
            screen: Logout,
            navigationOptions: {
                drawerLabel: 'Logout',
            },
        },
    },
    {
        contentComponent: CustomSidebarMenu,
        drawerWidth: Dimensions.get('window').width - 130,
    }
);

const ClientDrawer = createCompatNavigatorFactory(createDrawerNavigator)(
    {
        Contact: {
            screen: threeScreenStack,
            navigationOptions: {
                drawerLabel: 'Contact',
            },
        },
        Notifications: {
            screen: fourScreenStack,
            navigationOptions: {
                drawerLabel: 'Notifications',
            },
        },
        Logout: {
            screen: Logout,
            navigationOptions: {
                drawerLabel: 'Logout',
            },
        },
    },
    {
        contentComponent: CustomSidebarMenu,
        drawerWidth: Dimensions.get('window').width - 130,
    }
);

const AuthStack = createCompatNavigatorFactory(createStackNavigator)(
    {
        Login: { screen: Login,
        navigationOptions: () => ({
          title: null,
          headerShown: false
        })
      }
    }
  );

export default createSwitchNavigator(
    {
        Splash: Splash,
        AuthStack: AuthStack,
        ClientDrawer: ClientDrawer,
        AgentDrawer: AgentDrawer
    },
    {
      initialRouteName: 'Splash',
      backBehavior: "none",
      navigationOptions: () => ({
        backBehavior: "none"
      })
    }
  );