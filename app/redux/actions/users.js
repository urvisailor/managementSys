import axios from 'axios';
import usersType from '../types/usersType';
const Url=`https://gorest.co.in/public/v2`
export const getUsers = () => {
    return async (dispatch) => {
        dispatch({ type: usersType.GET_USERS })
        try {
            axios.get(`${Url}/users`)
                .then(function (response) {
                    console.log(response)
                    dispatch({type:usersType.GET_USERS_SUCCESS,payload:response.data})
                })
                .catch(function (error) {
                    dispatch({ type: usersType.GET_USERS_FAILED })
                    alert('InValid')
                });
        } catch (error) {
            dispatch({ type: usersType.GET_USERS_FAILED })
            alert('InValid')
        }
    }
};