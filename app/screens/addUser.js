import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../components/input';
import Button from '../components/button';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../redux/actions/users';
import Loader from '../components/loader';

const AddorEditUser = (props) => {
    const {
        route,
        navigation
    } = props
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        const data = route?.params?.data
        if (route?.params) {
            setName(data.name)
            setEmail(data.email)
            setGender(data.gender)
            setStatus(data.status)
        }
    }, [route?.params])


    const onSubmit = () => {
        const data = {
            userData: {
                name, gender, email, status
            },
            navigation: navigation
        }
        if (route.params.type == 'add') {
            dispatch(addUser(data))
        } else {
            data.userId = route?.params?.data?.id
            dispatch(editUser(data))
        }
    }
    
    return (
        <View style={[styles.container, { padding: 10 }]}>
            {user?.isloading ? <Loader /> : <View>
                <Input value={name} onChangeText={(text) => setName(text)} componentStyle={styles.secInput} placeholder={'Name'} />
                <Input value={email} onChangeText={(text) => setEmail(text)} componentStyle={styles.secInput} placeholder={'Email'} />
                <Input value={gender} onChangeText={(text) => setGender(text)} componentStyle={styles.secInput} placeholder={'Gender'} />
                <Input value={status} onChangeText={(text) => setStatus(text)} componentStyle={styles.secInput} placeholder={'Status'} />
                <Button text={route?.params.type == 'add' ? 'ADD' : 'EDIT'} onClick={onSubmit} componentStyle={{ marginTop: 20 }} />
            </View>}
        </View>
    )
}

export default AddorEditUser