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
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
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
                <View style={styles.tipContainer}>
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
        justifyContent: 'space-between',
        backgroundColor: colors.shape,

    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15,
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipController: {

    },
    tipImg: {

    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complent,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    }


})
