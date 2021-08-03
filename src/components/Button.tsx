import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest} : ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={.7}  {...rest} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 7,
    marginTop: 15,
    backgroundColor: '#A370F7',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
})
