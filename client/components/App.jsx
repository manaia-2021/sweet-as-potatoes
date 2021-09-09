

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
