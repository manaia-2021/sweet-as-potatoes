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
      <input
        placeholder='Enter a word or phrase'
        onKeyUp={submitWord} />
    </>
  )
}

export default connect()(AddWord)
