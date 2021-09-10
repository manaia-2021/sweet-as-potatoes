import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSales } from '../actions/sales'

function GarageSaleList ({ sales, dispatch, history }) {
  useEffect(() => {
    dispatch(fetchSales())
  }, [])

  return (
    <div className='container list my-5'>
      <h1>Garage Sale</h1>

      <Link to="/createsale" className="btn btn-primary my-2">Add a Sale!</Link>
      <br></br>
      <ul className="list-unstyled">
        {sales.map(sale => (
          <li key={sale.id}>
            <div className='listing'>
              <Link to={`/sale/${sale.id}`}>
                <h3>{sale.title}</h3>
              </Link>
              <p className='address'>{sale.street}, {sale.suburb}, {sale.city}</p>
              <p className='description'>{sale.description}</p>
              <p className='date'><strong>Date:</strong> {sale.date}</p>
              <p className='time'><strong>Time:</strong> {sale.startTime} - {sale.endTime}</p>
              <hr />
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
