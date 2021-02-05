import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Chart = ({data}) => {
  const [chart_data, change_chart_data] = useState(data)
  console.log(chart_data)
  return (
    <>
    </>
  )
}

Chart.defaultProps = {
  data: [], 
}

Chart.propTypes = {
  data: PropTypes.array, 
}

export default Chart2