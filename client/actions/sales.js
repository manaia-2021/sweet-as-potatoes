import { getSales } from '../apis/sales'
import { showError } from './error'

export const FETCH_SALES_PENDING = 'FETCH_SALES_PENDING'
export const FETCH_SALES_SUCCESS = 'FETCH_SALES_SUCCESS'

export function fetchSalesPending () {
  return {
    type: FETCH_SALES_PENDING
  }
}

export function fetchSalesSuccess (sales) {
  return {
    type: FETCH_SALES_SUCCESS,
    sales: sales
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
