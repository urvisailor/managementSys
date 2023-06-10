import axios from 'axios';
import usersType from '../types/usersType';
const Url = `https://gorest.co.in/public/v2`
const header = {
    "Authorization": "Bearer dcf64d0308058a08a217f6782b97c432f863d2d157f1095daa5d5a68d8b81b78",
    "Content-Type": "application/json",
    "Accept": "application/json"
}
export const getUsers = () => {
    return async (dispatch) => {
        dispatch({ type: usersType.GET_USERS })
        try {
            axios.get(`${Url}/users`)
                .then(function (response) {
                    console.log(response)
                    dispatch({ type: usersType.GET_USERS_SUCCESS, payload: response.data })
                })
                .catch(function (error) {
                    dispatch({ type: usersType.GET_USERS_FAILED })
                    alert('Error')
                });
        } catch (error) {
            dispatch({ type: usersType.GET_USERS_FAILED })
            alert('Error')
        }
    }
};

export const addUser = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: usersType.ADD_USER })
        const user = getState().user
        const {
            userData,
            navigation
        } = data
        try {
            axios.post(`${Url}/users`, userData, { headers: header })
                .then(function (response) {
                    console.log(response)
                    dispatch({ type: usersType.ADD_USER_SUCCESS, payload: [...user.users, response.data] })
                    navigation.navigate('user')
                })
                .catch(function (error) {
                    dispatch({ type: usersType.ADD_USER_FAILED })
                    alert('Error')
                });
        } catch (error) {
            dispatch({ type: usersType.ADD_USER_FAILED })
            alert('Error')
        }
    }
};

export const editUser = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: usersType.EDIT_USER })
        const user = getState().user
        const {
            userData,
            userId,
            navigation
        } = data
        try {
            axios.put(`${Url}/users/${userId}`, userData, { headers: header })
                .then(function (response) {
                    console.log(response)
                    const findIndex = user.users.findIndex(item => item.id === userId)
                    user.users[findIndex].name = userData.name
                    user.users[findIndex].email = userData.email
                    user.users[findIndex].gender = userData.gender
                    user.users[findIndex].status = userData.status
                    console.log("usersssss===>",user.users)
                    dispatch({ type: usersType.EDIT_USER_SUCCESS, payload: user.users })
                    navigation.navigate('user')
                })
                .catch(function (error) {
                    dispatch({ type: usersType.EDIT_USER_FAILED })
                    alert('Error')
                });
        } catch (error) {
            dispatch({ type: usersType.EDIT_USER_FAILED })
            alert('Error')
        }
    }
};