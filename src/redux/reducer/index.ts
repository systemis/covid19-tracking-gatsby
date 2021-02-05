import {CountriesInfo} from '../types'
import {countries_info_action, actions_name} from '../actions'

const CountriesInfoReducer = (state:CountriesInfo={
  countries: [], 
  general: {
    totalConfirmed: 0, 
  }, 
}, action:countries_info_action):CountriesInfo=> {
  if(action.type == actions_name.changeCountriesInfo){
    state.countries.push(action.value)
    return state
  }else{
    return state
  }
}

export {CountriesInfoReducer}