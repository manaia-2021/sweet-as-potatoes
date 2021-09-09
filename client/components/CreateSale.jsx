import React from 'react'
import { connect } from 'react-redux'

import { addWord } from '../actions'

function AddWord (props) {
  function submitWord (e) {
    if (e.keyCode === 13) {
      const action = addWord(e.target.value)
      props.dispatch(action)
      e.target.value = ''
    }
  }

  return (
    <>
      <form>
        <label>Title for your listing:
          <input type='text' name='title'></input>
        </label>
        <label>
          <input type='text' name='street'></input>
        </label>
        <label>
          <input type='text' name='suburb'></input>
        </label>
        <label>
          <input type='text' name='city'></input>
        </label>
        <label>
          <input type='text' name='date'></input>
        </label>
        <label>
          <input type='text' name='start_time'></input>
        </label>
        <label>
          <input type='text' name='end_time'></input>
        </label>
      </form>
    </>
  )
}

export default connect()(AddWord)
