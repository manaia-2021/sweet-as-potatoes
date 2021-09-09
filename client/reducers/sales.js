import { FETCH_SALES_SUCCESS } from '../actions/sales'

function sales (state = [], action) {
  switch (action.type) {
    case FETCH_SALES_SUCCESS:
      return action.sales

    default:
      return state
  }
}

export default sales
