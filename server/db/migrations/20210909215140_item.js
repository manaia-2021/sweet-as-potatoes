exports.up = function (knex) {
  return knex.schema.createTable('item', table => {
    table.increments('id').primary()
    table.string('name')
    table.decimal('price')
    table.integer('quantity')
    table.integer('category_id').references('id').inTable('category')
    table.integer('sale_id').references('id').inTable('sale')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('item')
}
