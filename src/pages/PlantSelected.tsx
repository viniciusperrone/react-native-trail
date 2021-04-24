import React from 'react';

import { 
    Text, 
    View,
    StyleSheet
} from 'react-native';

import { Header } from '../components/Header';

import colors from '../../styles/colors';

export function PlantSelected(){
    return(
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    }
})