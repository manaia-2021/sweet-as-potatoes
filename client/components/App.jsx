import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import GarageSaleList from './GarageSaleList'
import GarageSale from './GarageSale'

function App () {
  return (
    <div className='app'>
      <Route exact path='/' component={GarageSaleList} />
      <Route exact path='/Garagesale' component={GarageSale} />
      {/* <Route path='/' component={Header} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
      {/* <Route exact path='/' render={({ history }) => {
        return <GarageSaleList history={history}> */}
      {/* {/* <WaitIndicator /> */}
      {/* </GarageSaleList> */}
      {/* }} /> */} */}
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
  )
}

export default App
