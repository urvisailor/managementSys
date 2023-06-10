import usersType from "../types/usersType";
const initialState = {
  users:[],
  isloading:false
};
export const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case usersType.GET_USERS:
            return {
                ...state,
                isloading:true
            };
        case usersType.GET_USERS_SUCCESS:{
            return{
                ...state,
                isloading:false,
                users:action.payload
            }
        };
        case usersType.GET_USERS_FAILED:{
            return {
                ...state,
                isloading:false
            }
        }
    }
    return state
}