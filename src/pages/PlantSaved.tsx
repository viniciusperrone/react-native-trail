import React from 'react';

import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';

import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';
import waterDrop from '../assets/waterdrop.png';

import Button from '../components/Button';

export function PlantSaved(){

    return (
    
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri 
                    uri=""
                    height={150}
                    width={150}
                />
                <Text style={styles.plantName}>
                    Nome da planta
                </Text>
                <Text style={styles.plantAbout}>
                    Sobre a planta
                </Text>
            </View>
            
            <View style={styles.controller}>
                <View style={styles.tipController}>
                    <Image 
                        source={waterDrop}
                        style={styles.tipImg}
                    />
                    <Text 
                        style={styles.tipText}
                    >

                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                <Button 
                    title="Cadastrar planta"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.shape,

    },
    plantInfo: {

    },
    plantName: {

    },
    plantAbout: {

    },
    controller: {

    },
    tipController: {

    },
    tipImg: {

    },
    tipText: {

    },
    alertLabel: {

    }


})
