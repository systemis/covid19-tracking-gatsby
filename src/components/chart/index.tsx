import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Bar = ({x, y, width, height, expenseName, highestExpense}) => {
  return (
    <>
      <rect 
        x={x}
        y={y}
        height={height} 
        width={width} 
        fill={height ==  highestExpense ? 'purple' : 'black'}/>

    </>
  )
}

const Chart = ({data}) => {
  const calculateHighestExpense = () => data.reduce((cal, current) => {
    const { expense } = current;
    return expense > cal ? expense : cal 
  }, 0);

  const constant_avr_height:number= 5
  var maxExpense:number  = 200 / constant_avr_height
  var chartHeight:number = maxExpense + 4 
  const barWidth:number  = 5
  const barMargin:number = 3 
  const numberOfBars:number= data.length 
  const width:number= numberOfBars*(barWidth+barMargin)


  const [expenseData,] = useState(data)//calculateHighestExpense(expenseData)/constant_avr_height
  const [highestExpense,] = useState(calculateHighestExpense()/constant_avr_height)

  useEffect(() => {
    return ():void => {
      console.log('Unmountting: ', JSON.stringify(expenseData));
      console.log(highestExpense);
    }
  });

  return (
    <>
      <p className="legend">
          <span className="expense">Expense</span>
          <span className="highest-expense">Highest expense</span>
      </p>
      <svg
        viewBox={`0 0 ${width} ${chartHeight}`} fill={'yellow'}>
          {expenseData.map((_value, _index) => {
            const barHeight = _value.expense / constant_avr_height
            return (
              <Bar
                key={`bar-in-bartchart${_index}`}
                x={_index*(barWidth+barMargin)} 
                y={chartHeight-barHeight}
                width={barWidth}
                height={barHeight}
                expenseName={_value.name}
                highestExpense={highestExpense}
                />
            )
          })}
      </svg>
    </>
  )
}

Chart.defaultProps = {
  data: [
    // { name: "Phone", expense: 151 },
    { name: "Electricity", expense: 100 },
    { name: "Car", expense: 5 },
    { name: "Leisure", expense: 182 },
    { name: "Grabage", expense: 142 },
    { name: "Grabage", expense: 42 },
    { name: "Grabage", expense: 122 },
    { name: "Grabage", expense: 102 },
  ], 
}

Chart.propTypes = {
  data: PropTypes.array, 
}

export default Chart 