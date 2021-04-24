import React from 'react';

import { 
  Text, 
  View, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions, 
  SafeAreaView 
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
 
import wateringImg from '../assets/watering.png';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Welcome(){

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de{'\n'} forma fácil
        </Text>

        <Image 
          source={wateringImg} 
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
            Não esqueça mais de regar as plantas.
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity 
              style={styles.button}
              activeOpacity={0.7}
          >
              <Entypo name="chevron-right" style={styles.buttonIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
    paddingHorizontal: 10
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
});
