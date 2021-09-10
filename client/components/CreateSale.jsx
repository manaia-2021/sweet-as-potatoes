import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addSale } from '../actions/sale'

function CreateSale (props) {
  const initialState = {
    title: '',
    address: '',
    suburb: '',
    city: '',
    description: '',
    date: '',
    startTime: '',
    endTime: ''
  }
  const [newSale, setNewSale] = useState(initialState)

  function handleChange (event) {
    setNewSale({ ...newSale, [event.target.name]: event.target.value })
  }

  function handleAdd () {
    const action = addSale(newSale)
    props.dispatch(action)
    // blank out the input
    setNewSale(initialState)
  }

  return (
    <div className="container mt-5">
      <h1>Create Your Own Garage Sale</h1>

      <br></br>
      <form>
        <div className="form-group">
          <label>Title for your listing:</label>
          <input className="form-control" type='text' name='title' value={newSale.title} onChange={handleChange}></input>
        </div>
        <div className="form-group">
          <label>House number:</label>
          <input className="form-control" type='text' name='address' value={newSale.address} onChange={handleChange}></input>

        </div>
        <div className="form-group">
          <label>Suburb:</label>
          <input className="form-control" type='text' name='suburb' value={newSale.suburb} onChange={handleChange}></input>

        </div>
        <div className="form-group">
          <label>City:   </label>
          <input className="form-control" type='text' name='city' value={newSale.city} onChange={handleChange}></input>

        </div>
        <div className="form-group">
          <label>Date:</label>
          <input className="form-control" type='text' name='date' value={newSale.date} onChange={handleChange}></input>

        </div>

        <div className="form-group">
          <label>Start time:</label>
          <input className="form-control" type='text' name='start_time' value={newSale.startTime} onChange={handleChange}></input>

        </div>
        <div className="form-group">
          <label>End time:</label>
          <input className="form-control" type='text' name='end_time' value={newSale.endTime} onChange={handleChange}></input>

        </div>
        <button className="btn btn-primary" onClick={handleAdd}>Create garage sale</button>
      </form>
      <Link to="/" className="btn btn-warning mt-2">Cancel</Link>
    </div>
  )
}

export default connect()(CreateSale)
