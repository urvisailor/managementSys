import usersType from "../types/usersType";
const initialState = {
    users: [],
    isloading: false
};
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersType.GET_USERS:
            return {
                ...state,
                isloading: true
            };
        case usersType.GET_USERS_SUCCESS: {
            return {
                ...state,
                isloading: false,
                users: action.payload
            }
        };
        case usersType.GET_USERS_FAILED: {
            return {
                ...state,
                isloading: false
            }
        }
        case usersType.ADD_USER:
            return {
                ...state,
                isloading: true
            };
        case usersType.ADD_USER_SUCCESS: {
            return {
                ...state,
                isloading: false,
                users: action.payload
            }
        };
        case usersType.ADD_USER_FAILED: {
            return {
                ...state,
                isloading: false
            }
        }
        case usersType.EDIT_USER:
            return {
                ...state,
                isloading: true
            };
        case usersType.EDIT_USER_SUCCESS: {
            return {
                ...state,
                isloading: false,
                users: action.payload
            }
        };
        case usersType.EDIT_USER_FAILED: {
            return {
                ...state,
                isloading: false
            }
        }
    }
    return state
}