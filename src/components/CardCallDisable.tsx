import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CardCallDisable = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Teste</Text>
      </View>
      <View style={styles.footer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 141,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    height: 110,
    backgroundColor: '#AFAFAF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  footer: {
    width: '100%',
    height: 31,
    backgroundColor: '#1BB734',
  }
})
