import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest} : SkillCardProps){
  return (
    <TouchableOpacity {...rest} style={styles.buttonSkill}>
      <Text style={styles.skills}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill:{
    padding: Platform.OS ? 15 : 10,
    marginVertical: 5,
    backgroundColor: '#1D1E25',
    borderRadius: 50,
    alignItems: 'center'
  },
  skills: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  }
})

