import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { SplashSvg } from '../../assets/icons/main-icons'
import { mvs } from '../../config/metrices'
const Splash = () => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);

    }, [])


    return (
        <View style={styles.container}>
            <SplashSvg width={'60'} height={'50'} />
        </View>
    )
}

export default Splash;