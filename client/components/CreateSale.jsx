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
        <label>House number:
          <input type='text' name='street'></input>
        </label>
        <label>Suburb:
          <input type='text' name='suburb'></input>
        </label>
        <label>City:
          <input type='text' name='city'></input>
        </label>
        <label>Date:
          <input type='text' name='date'></input>
        </label>
        <label>Start time:
          <input type='text' name='start_time'></input>
        </label>
        <label>End time:
          <input type='text' name='end_time'></input>
        </label>
        <button handleClick=''>Create garage sale</button>
      </form>
    </>
  )
}

export default connect()(AddWord)
