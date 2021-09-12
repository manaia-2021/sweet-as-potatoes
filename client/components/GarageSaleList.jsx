import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSales } from '../actions/sales'

function GarageSaleList ({ sales, dispatch }) {
  useEffect(() => {
    dispatch(fetchSales())
  }, [])

  return (
    <div className='list'>
      <h1>Garage Sale</h1>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>

            <div className='listing'>
              <h3>{sale.title}</h3>
              <p className='address'>{sale.street} {sale.suburb} {sale.city}</p>
              <p className='description'>{sale.description}</p>
              <p className='date'>{sale.date}</p>
              <p className='time'>{sale.start_time} {sale.end_time}</p>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    sales: state.sales
  }
}

export default connect(mapStateToProps)(GarageSaleList)
