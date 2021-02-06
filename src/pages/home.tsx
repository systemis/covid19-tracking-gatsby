import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {connect} from 'react-redux'
import {countries_info_reducer} from '../redux/reducer/names'
import {StateInfo} from '../redux/types'
import {actions_name} from '../redux/actions'


import {BarChart} from '../components/chart/'
const HomePage = props => {
  console.log('props showing: ', props)

  const query_countries_info_data = ():void => {
    const query = graphql`
      query CountriesUserQuery {
        allCountriesInfo {
          edges {
            node {
              Country 
            }
          }
        }
      }
    `

    let data = useStaticQuery(query)
    data = data.allCountriesInfo.edges
    data.map((_val, _index) => data[_index] = _val.node)
    return data
  }

  const data = query_countries_info_data()
  console.log('data querying: ', data)

  return (
    <div>
      <BarChart />
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