import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const AboutUs = () => {
    return (
        <View style={[styles.container,{padding:20}]}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sapien vitae nisl lobortis, et tempus sem congue. Sed lacinia justo id urna ultricies efficitur. Nam at augue condimentum, interdum sapien eget, fringilla quam. Pellentesque pharetra auctor scelerisque. Donec fringilla felis a nisl condimentum consectetur.</Text>
        </View>
    )
}

export default AboutUs