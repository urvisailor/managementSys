import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles'
import color from '../constants/color'

const Loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color={color.GREEN} />
        </View>
    )
}

export default Loader