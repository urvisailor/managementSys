import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ContactUs = () => {
    return (
        <View style={[styles.container, { padding: 20 }]}>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sapien vitae nisl lobortis, et tempus sem congue. Sed lacinia justo id urna ultricies efficitur. Nam at augue condimentum, interdum sapien eget, fringilla quam. Pellentesque pharetra auctor scelerisque. Donec fringilla felis a nisl condimentum consectetur.</Text>
            <Text style={[styles.contactInfo, { marginTop: 20 }]}>Email: info@example.com</Text>
            <Text style={styles.contactInfo}>Phone: +1 123-456-7890</Text>
        </View>
    )
}

export default ContactUs