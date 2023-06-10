import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import { userReducer } from "../reducers/users";
const rootReducer = combineReducers({
    user:userReducer
});
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
  export default store