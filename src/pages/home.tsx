import React from 'react'
import {connect} from 'react-redux'
import {countries_info_reducer} from '../redux/reducer/names'
import {StateInfo} from '../redux/types'
import {actions_name} from '../redux/actions'

import Chart from '../components/chart/'

const HomePage = props => {
  console.log('Props showing: ', props)
  return (
    <div>
      <Chart />
    </div>
  )
}

const mapStatetoProps = state => {return {
  countriesInfo: state[countries_info_reducer]
}}

const mapDispatchtoProps = dispatch => {return {
  addStateInfo: (val:StateInfo) => dispatch({type: actions_name.changeCountriesInfo, value: val})
}}

export default connect(mapStatetoProps, mapDispatchtoProps)(HomePage)