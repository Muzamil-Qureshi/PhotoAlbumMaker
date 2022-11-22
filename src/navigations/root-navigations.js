import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Home from '../screens/home';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: "false" }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default RootNavigator;