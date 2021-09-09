const connection = require('./connection')

function getSales (db = connection) {
  return db('sales').select()
}

function getSaleById(id, db = connection) {
  return db('items')
  .join('sales', 'sales.id', 'items.sales_id')
  .select()
  .where({sales_id: id})
}

module.exports = {
  getSales,
  getSaleById
}
