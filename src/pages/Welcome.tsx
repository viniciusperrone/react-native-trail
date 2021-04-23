import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
 
import wateringImg from '../assets/watering.png';

import Button from '../components/Button';

export default function App(){

  const [visible, setVisible] = useState(false);

  function handleVisibility(){
    setVisible(true);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>

      { 
        visible &&      
        <Image source={wateringImg} style={styles.image}/>

      }
      <Text>
          Não esqueça mais de regar as plantas.
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title='Avançar' onPress={handleVisibility}/>

    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    width: 292,
    height: 284
  }
});
