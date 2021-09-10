import { getItems } from '../apis/items'
import { showError } from './error'

export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'

export function fetchItemsPending () {
  return {
    type: FETCH_ITEMS_PENDING
  }
}

export function fetchSalesSuccess (sales) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    items: items
  }
}

export function fetchSales () {
  return (dispatch) => {
    return getSales()
      .then((sales) => {
        dispatch(fetchSalesSuccess(sales))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
