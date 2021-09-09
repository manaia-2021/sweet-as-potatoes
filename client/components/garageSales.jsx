import React from 'react'
import { connect } from 'react-redux'

function garageSales (props) {

  return (
    <ul>
      {props.sales.map(sale => (
        <li key={sale.id}>{sale.title} {sale.street} {sale.suburb} {sale.city} {sale.description} {sale.date} {sale.start_time} {sale.end_time}</li>
      ))}
    </ul>
  )
}

function mapStateToProps (state) {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Words)
