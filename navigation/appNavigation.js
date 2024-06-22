import { View, Text } from "react-native";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreScreen from '../screens/StoreScreen.js';
import HomeScreen from '../screens/HomeScreen.js';

const stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Store">
                <stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                <stack.Screen name="Store" options={{headerShown: false}} component={StoreScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}