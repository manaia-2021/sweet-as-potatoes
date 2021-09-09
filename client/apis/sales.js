import request from 'superagent'

const rootUrl = '/api/v1'

export function getSales () {
  return request.get(rootUrl + '/sales').then((res) => {
    return res.body.sales
  })
}

export function getSaleById (id) {
  return request.get(rootUrl + '/sales/' + id).then((res) => {
    return res.body
  })
}
