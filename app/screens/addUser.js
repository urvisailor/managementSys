import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/input';
import Button from '../components/button';
import styles from './styles';

const AddorEditUser = (props) => {
    const {
        route
    } = props
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    return (
        <View style={[styles.container, { padding: 10 }]}>
            <Input value={name} onChangeText={(text) => setName(text)} componentStyle={styles.secInput} placeholder={'Name'} />
            <Input value={email} onChangeText={(text) => setEmail(text)} componentStyle={styles.secInput} placeholder={'Email'} />
            <Input value={gender} onChangeText={(text) => setGender(text)} componentStyle={styles.secInput} placeholder={'Gender'} />
            <Input value={status} onChangeText={(text) => setStatus(text)} componentStyle={styles.secInput} placeholder={'Status'} />
            <Button text={route?.param == 'add' ? 'ADD' : 'EDIT'} onClick={() => { }} componentStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default AddorEditUser