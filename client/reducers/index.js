import { combineReducers } from 'redux'

import sales from './sales'
import waiting from './waiting'
import errorMessage from './errorMessage'

export default combineReducers({
  sales,
  waiting,
  errorMessage
})
