import { getSaleById, addNewSale } from '../apis/sales'
import { showError } from './error'

export const FETCH_SALE_PENDING = 'FETCH_SALE_PENDING'
export const FETCH_SALE_SUCCESS = 'FETCH_SALE_SUCCESS'

export function fetchSalePending () {
  return {
    type: FETCH_SALE_PENDING
  }
}

export function fetchSaleSuccess (sale) {
  return {
    type: FETCH_SALE_SUCCESS,
    sale: sale
  }
}

export function fetchSaleById (id) {
  return (dispatch) => {
    dispatch(fetchSalePending())
    return getSaleById(id)
      .then((sale) => {
        dispatch(fetchSaleSuccess(sale))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

export function addSale (saleInfo) {
  return (dispatch) => {
    dispatch(fetchSalePending())
    return addNewSale(saleInfo)
      .then((sale) => {
        dispatch(fetchSaleSuccess(sale))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
