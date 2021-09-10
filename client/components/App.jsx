
import React from 'react'
import { Route } from 'react-router-dom'
import GarageSale from './GarageSale'
// import { connect } from 'react-redux'
import GarageSaleList from './GarageSaleList'

function App () {
  return (
    <>
    <GarageSale/>
    <div className='app'>
      {/* <Route path='/' component={Header} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Route exact path='/' render={({ history }) => {
        return <GarageSaleList history={history}>
          
        </GarageSaleList>
        
      }} />
      {/* <Route path='/cart' render={({ history }) => {
        return <Cart history={history}>
          <WaitIndicator />
        </Cart>
      }} />
      <Route path='/orders' render={() => {
        return <OrderList>
          <WaitIndicator />
        </OrderList>
      }} /> */}
       
    </div>
    </>
  )
}

export default App

