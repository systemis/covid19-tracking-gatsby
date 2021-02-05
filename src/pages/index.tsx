import React from 'react'
import HomePage from './home'

import {Provider} from 'react-redux'
import store from '../redux'

const IndexPage = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default IndexPage
