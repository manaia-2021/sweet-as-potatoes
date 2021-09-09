const connection = require('./connection')

function getAllSales (db = connection) {
  return db('sale').select(
    'id',
    'title',
    'street',
    'suburb',
    'city',
    'description',
    'date',
    'startTime',
    'endTime',
    'imageUrl'
  )
}

// function getSaleById(id, db = connection) {
//   return db('item').join('sale', 'sale.id', 'item.sale_id').select().where({ sale_id: id })
// }

async function getSaleById (id, db = connection) {
  const items = await db('item')
    .join('category', 'category.id', 'item.category_id')
    .select('item.name as itemName', 'category.id as categoryId', 'category.name as category', 'price', 'quantity')
    .where('sale_id', id)

  const sale = await db('sale')
    .select('id',
      'title',
      'street',
      'suburb',
      'city',
      'description',
      'date',
      'startTime',
      'endTime',
      'imageUrl').where('id', id).first()

  return { sale, items }
}

module.exports = {
  getAllSales,
  getSaleById
}
