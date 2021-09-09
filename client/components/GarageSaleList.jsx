import React from 'react'
// import { connect } from 'react-redux'

function GarageSaleList (props) {

  return (
    <div className='list'>
    <ul>
      {props.sales.map(sale => (
        <li key={sale.id}>
          <div className='listing'>
          {sale.title} 
          <div className='address'>{sale.street} {sale.suburb} {sale.city}</div> 
          <div className='description'>{sale.description}</div> 
          <div className='date'>{sale.date}</div> 
          <div className='time'>{sale.start_time} {sale.end_time}</div>
          </div> 
        </li>
      ))}
    </ul>
    </div>
  )
}
export default GarageSaleList
// function mapStateToProps (state) {
//   return {
//     words: state.words
//   }
// }

// export default connect(mapStateToProps)(Words)
