import { combineReducers } from 'redux'

import sale from './sale'
import sales from './sales'
import waiting from './waiting'
import errorMessage from './errorMessage'

export default combineReducers({
  sale,
  sales,
  waiting,
  errorMessage
})
