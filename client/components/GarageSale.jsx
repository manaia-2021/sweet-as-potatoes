import React, { useEffect, useState } from 'react'
import Items from './Items'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Filter from './Filter'
import { fetchSaleById } from '../actions/sale'

const GarageSale = (props) => {
  const [items, setItems] = useState(null)
  const [sort, setSort] = useState('')

  useEffect(() => {
    props.dispatch(fetchSaleById(1))
  }, [])

  useEffect(() => {
    setItems(props.sale.items)
  }, [props.sale])

  function handleChangeSort (e) {
    setSort(e.target.value)
    const sorted = [...props.sale.items].sort((a, b) => (sort === 'lowest') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1))
    setItems(sorted)
  }

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-primary">Back to Home</Link>
      {props.sale.sale && (
        <>
          <h1>{props.sale.sale.title}</h1>
          <p>{props.sale.sale.description}</p>
          <small><em>Address:</em>{props.sale.sale.street} {props.sale.sale.suburb} {props.sale.sale.city}</small>
        </>
      )}
      <p>{props.sale.description}</p>

      <div className="mt-5">
        <h2> List Of Items on sale</h2>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filter sort={sort} handleChangeSort={handleChangeSort} />
            <hr/>
            {items && <Items items= {items}/>}
          </div>
          <div className="col-md-4">

          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return { sale: state.sale }
}

export default connect(mapStateToProps)(GarageSale)
