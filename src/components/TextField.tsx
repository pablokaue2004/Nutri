import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'

interface IPropsTextFiled {
    title: string,
    placeholder: string,

}

export const TextField = ({ title, placeholder }: IPropsTextFiled) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.input}>
                    <TextInput style={{ width: '100%', height: '100%' }} placeholder={placeholder} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 278,
        display: 'flex',
        flexDirection: "column",
        marginBottom: 6
    },
    input: {
        width: '100%',
        height: 41,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 8
    },
    title: {
        marginLeft: 4,
        color: '#fff',
        fontSize: 12
    }
})
