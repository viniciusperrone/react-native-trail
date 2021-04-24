import React from 'react';

import { 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    TouchableOpacityProps 
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}
export default function Button( { title, ...rest } : ButtonProps ){
    return(
        <TouchableOpacity 
            style={styles.conteiner}
            {...rest}
        >
            <Text style={styles.text}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
      },
      text:{
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
      }
})