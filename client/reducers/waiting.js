import { FETCH_SALES_PENDING, FETCH_SALES_SUCCESS } from '../actions/sales'
import { FETCH_SALE_PENDING, FETCH_SALE_SUCCESS } from '../actions/sale'

import { SHOW_ERROR } from '../actions/error'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_SALES_PENDING:
    case FETCH_SALE_PENDING:
      return true
    case FETCH_SALES_SUCCESS:
    case FETCH_SALE_SUCCESS:
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
