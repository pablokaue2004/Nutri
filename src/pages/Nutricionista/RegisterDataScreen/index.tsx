import React from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../../components/Button'
import { TextField } from '../../../components/TextField'
import Logo from '../../../../assets/logo.svg'
import { useNavigation } from '@react-navigation/native'

export const RegisterDataScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={stylesUp.container}>
                <Logo />
            </View>
            <View style={stylesDown.container}>
                <View style={stylesDown.main}>
                    <Text style={stylesDown.title}>Vamos criar um cadastro para você!</Text>
                    <Text style={stylesDown.subtitle}>Preencha todos os dados a seguir</Text>
                    <KeyboardAvoidingView behavior='padding'>
                        <TextField title='Nome' placeholder='Digite um nome' />
                        <TextField title='Email' placeholder='Digite um Email' />
                    </KeyboardAvoidingView>
                </View>
                <View>
                    <Button action={'CodeRegisterScreen'} title='Próximo' />
                </View>
            </View>
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
const stylesUp = StyleSheet.create({
    container: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
})
const stylesDown = StyleSheet.create({
    container: {
        flex: 0.6,
        width: 567,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 283.5,
        borderTopRightRadius: 283.5,
        shadowRadius: 100,
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowColor: '#000000',
        elevation: 100,
        backgroundColor: '#88D87C'
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 18
    },
})
