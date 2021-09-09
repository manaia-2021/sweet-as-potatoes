<<<<<<< HEAD


import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// import { fetchFruits } from '../actions'
import GarageSale from './GarageSale'
import GarageSaleList from './GarageSaleList'



function App (props) {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // }, [])

  return (
    <>
    <GarageSale/>
    <GarageSaleList/>
    </>
  )
}
// const mapStateToProps = (globalState) => {
//   return {
  
//     fruits: globalState.fruits
//   }


export default App;
=======
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import GarageSaleList from './GarageSaleList'

function App () {
  return (
    <div className='app'>
      {/* <Route path='/' component={Header} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Route exact path='/' render={({ history }) => {
        return <GarageSaleList history={history}>
          {/* <WaitIndicator /> */}
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
  )
}

export default App
>>>>>>> main
