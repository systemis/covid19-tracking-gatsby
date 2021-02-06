import React from 'react'
import PropTypes from 'prop-types'

const LineChart = ({data}) => {
  const calculateHighestExpense = _data => _data.reduce((acc, current) => {
    const {expense} = current
    return expense > acc ? current : acc 
  }, 0)

  const lengthData:number  = data.length
  const figureWidth:number = 20
  const maxExpense:number  = 200

  let hightestExpense = calculateHighestExpense(data)

  const charWidth = lengthData * figureWidth 
  const charHeight = maxExpense + 20 
  
  const render_w_year = (year_data, index) => {
    console.log('key:L ', index, year_data)
    return (
      <>
      </>
    )
  }

  return (
    <>
      <svg viewBox={`0 0 ${charWidth} ${charHeight}`}>
        {data.map((value, index) => {
          var rectboxY = charHeight - 10
          var rectboxx = index * figureWidth + figureWidth
          return (
            <rect key={`figure-name-${index}`} y={rectboxY} x={rectboxx}> 
              <span>{value.name}</span>
            </rect>
          )
        })}  

        {data.map((value, index) => {
          return render_w_year(value, index)
        })}
      </svg>
    </>
  )
}

const Line = ({x1, x2, y1, y2, name}) => {
  console.log('line name: ', name)
  return (
    <line 
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}/>
  )
}

LineChart.propTypes = {
  data: PropTypes.array
}

LineChart.defaultProps = {
  data: [
    {
      year: 'March', 
      data: [
        {name: 'garbage', expense: 20}, 
        {name: 'building', expense: 100}, 
        {name: 'humman research', expense: 120}
      ]
    }, 

    {
      year: 'April', 
      data: [
        {name: 'garbage', expense: 50}, 
        {name: 'building', expense: 60}, 
        {name: 'humman research', expense: 100}
      ], 
    }
  ], 
}

export default LineChart 