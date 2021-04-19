import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'
import {categoriesReducer} from './reducers/categoriesReducers'

//combine all reducers to one, change names of reducer if want
const allReducers = combineReducers({
    user: userReducer,
    categories: categoriesReducer
})

//add all middleware to list
const middlewares = [thunk]

//create store, compose it with dev tools, and apply all middleware
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(...middlewares)))

export default store;