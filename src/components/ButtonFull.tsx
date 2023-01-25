import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface IPropsButton {
    title: string,
    action: any,
}

export const ButtonFull = ({ title, action }: IPropsButton) => {

    const navigation = useNavigation()


    return (
        <TouchableOpacity onPress={() => navigation.navigate(action)} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 278,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 8,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        cursor: 'pointer',
        marginBottom: 16
    },
    title: {
        fontSize: 12,
        fontWeight: "800",
        color: "#1bb734",
    }
})
