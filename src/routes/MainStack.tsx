import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterDataScreen } from '../pages/Nutricionista/RegisterDataScreen';
import { CodeRegisterScreen } from '../pages/Nutricionista/CodeRegisterScreen';
import { PasswordScreen } from '../pages/Nutricionista/passwordScreen';
import { SelectUserScreen } from '../pages/SelectUserScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListCalls } from '../pages/Nutricionista/ListCalls';
import { AddCalls } from '../pages/Nutricionista/AddCalls';
import { Profile } from '../pages/Nutricionista/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    }
                    if (route.name === 'Add') {
                        iconName = focused
                            ? 'add-circle'
                            : 'add-circle-outline';
                    }
                    if (route.name === 'Profile') {
                        iconName = focused
                            ? 'people-sharp'
                            : 'people-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#fff',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 16,
                    left: 12,
                    right: 12,
                    elevation: 0,
                    backgroundColor: '#88D87C',
                    borderRadius: 6,
                    height: 48,
                    elevation: 4
                }
            })}
            initialRouteName='Home'
        >
            <Tab.Screen
                name="Home"
                component={ListCalls}
            />
            <Tab.Screen
                name="Add"
                component={AddCalls}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default () => {
    return (
        <MainStack.Navigator initialRouteName='SelectUserScreen'>
            <MainStack.Screen
                name="SelectUserScreen"
                component={SelectUserScreen}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="RegisterDataScreen"
                component={RegisterDataScreen}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="CodeRegisterScreen"
                component={CodeRegisterScreen}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="Password"
                component={PasswordScreen}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="TabNavNutri"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </MainStack.Navigator>
    )
}

