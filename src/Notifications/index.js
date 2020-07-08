import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Notifications = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the Notifications screen!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
export default Notifications;