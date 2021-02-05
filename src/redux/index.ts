import {combineReducers, createStore}  from 'redux'
import {CountriesInfoReducer} from './reducer'
import {countries_info_reducer} from './reducer/names'

var list_reducer = {} 
list_reducer[countries_info_reducer] = CountriesInfoReducer
const reducer = combineReducers(list_reducer)
const store = createStore(reducer)
export default store
