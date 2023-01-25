import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { CardCallDisable } from '../../../components/CardCallDisable'

export const ListCalls = () => {
    return (
        <View style={styles.container}>
            <Text>Atendimentos Agendados</Text>
            <View style={{height: 141}}>
                <ScrollView horizontal={true}>
                    <CardCallDisable />
                    <CardCallDisable />
                    <CardCallDisable />
                    <CardCallDisable />
                    <CardCallDisable />
                    <CardCallDisable />
                </ScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 16
    },
})

