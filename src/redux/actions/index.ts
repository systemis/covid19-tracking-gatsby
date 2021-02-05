import {StateInfo} from '../types'

interface countries_info_action {
  type: string, 
  value: StateInfo
}

const actions_name = {
  changeCountriesInfo: 'change-countriesinfo' 
}

export {
  countries_info_action, 
  actions_name
}