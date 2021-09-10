import { FETCH_SALE_SUCCESS } from '../actions/sale'

function sale (state = {}, action) {
  switch (action.type) {
    case FETCH_SALE_SUCCESS:
      console.log('inside sale reducer', action)
      return action.sale
    default:
      return state
  }
}

export default sale
