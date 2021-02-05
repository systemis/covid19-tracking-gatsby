import redux from 'redux'
import {CountriesInfoReducer} from './reducer'
import {countries_info_reducer} from './reducer/names'

var list_reducer = {} 
list_reducer[countries_info_reducer] = CountriesInfoReducer

const reducer = redux.combineReducers(list_reducer)
const store = redux.createStore(reducer)

export default store
