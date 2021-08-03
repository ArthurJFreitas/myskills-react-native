import React, { useState, useEffect } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  FlatList,
} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string,
  name: string
}

export const Home = () => {

  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [gretting, setGretting] = useState('');

  useEffect(()=> {
    const currentHour = new Date().getHours();

    if(currentHour < 12){
      setGretting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon')
    } else {
      setGretting('Good nigth')
    }
  }, [])

  function handleAddNewSkill() {

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    if(newSkill){
      setMySkills(oldState => [...oldState, data])
      setNewSkill('')
    }
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState  => oldState.filter(item => item.id !== id))
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Arthur
        </Text>
        <Text style={styles.grettings}>
          {gretting}
        </Text>

        <TextInput 
          style={styles.input} 
          placeholder="New skill" 
          placeholderTextColor="#666"
          onChangeText={setNewSkill}
          defaultValue={newSkill}
        />

        <Button
          title="Add" 
          onPress={handleAddNewSkill}
        />

        <Text style={[styles.title, {marginVertical: 20}]}>
          My Skills
        </Text>
        <FlatList 
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
              <SkillCard onPress={() => handleRemoveSkill(item.id)} skill={item.name}/>
          )}
        >
         
        </FlatList>
       
    
      </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    padding: 15,
    marginTop: 15,
    borderRadius: 7
  },
  grettings:{
    color: '#FFF',
    fontSize: 14,
  }
})

