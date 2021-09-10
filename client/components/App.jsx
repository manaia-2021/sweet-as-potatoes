import React from 'react'
import { Route } from 'react-router-dom'
import CreateSale from './CreateSale'
import GarageSale from './GarageSale'
import GarageSaleList from './GarageSaleList'

function App () {
  return (
    <div className='app'>
      <Route exact path='/' component={GarageSaleList} />
      <Route path='/sale/:id' component={GarageSale} />
      <Route path='/createsale' component={CreateSale} />
    </div>
  )
}
export default App
