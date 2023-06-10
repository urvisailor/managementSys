import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/users'
import styles from './styles'
import icons from '../constants/icons'
import Loader from '../components/loader'

const Users = (props) => {
    const {
        navigation
    } = props
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: "https://www.pngfind.com/pngs/m/16-168087_wikipedia-user-icon-bynightsight-user-image-icon-png.png" }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.gender}>{item.gender}</Text>
            <Text style={styles.status}>{item.status}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('modifyUser', { type: 'edit', data: item })}>
                <Image source={icons.edit} style={styles.editImg} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {user?.isloading ? <Loader /> :
                <View style={{ flex: 1 }}>
                    <FlatList
                        contentContainerStyle={{ margin: 20, paddingBottom: 20 }}
                        data={user.users}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('modifyUser', { type: 'add' })}>
                        <Image source={icons.add} />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default Users