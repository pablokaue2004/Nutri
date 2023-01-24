import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../pages/MainScreen';
import { RegisterScreen } from '../pages/RegisterScreen';
import { PasswordScreen } from '../pages/passwordScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator initialRouteName='Main'>
            <MainStack.Screen
                name="Main"
                component={MainScreen}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="Password"
                component={PasswordScreen}
                options={{ headerShown: false }}
            />
        </MainStack.Navigator>
    )
}
