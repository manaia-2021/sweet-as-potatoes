export const ADD_SALE = 'ADD_SALE'
export const DEL_SALE = 'DEL_SALE'

export function addSale (newSale) {
  return {
    type: ADD_SALE,
    sale: newSale
  }
}

export function deleteSale (sale) {
  return {
    type: DEL_SALE,
    sale: sale
  }
}
