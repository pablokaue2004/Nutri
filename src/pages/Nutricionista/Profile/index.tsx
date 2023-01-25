import React from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../../components/Button'
import { TextField } from '../../../components/TextField'
import Logo from '../../../../assets/logo.svg'
import { useNavigation } from '@react-navigation/native'

export const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

