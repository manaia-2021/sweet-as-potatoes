import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSales } from '../actions/sales'
import GarageSale from './GarageSale'

function GarageSaleList (props) {
  useEffect(() => {
    props.dispatch(fetchSales())
  }, [])

  return (
    <div className='container list'>
      <h1>Garage Sale</h1>
      <ul>
        {props.sales.map(sale => (
          <li key={sale.id}>
            <Link to = '{GarageSale}'>
              <div className='listing'>
                <h3>{sale.title}</h3>
                <p className='address'>{sale.street}, {sale.suburb}, {sale.city}</p>
                <p className='description'>{sale.description}</p>
                <p className='date'>{sale.date}</p>
                <p className='time'>{sale.start_time} {sale.end_time}</p>
              </div>
            </Link>
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
