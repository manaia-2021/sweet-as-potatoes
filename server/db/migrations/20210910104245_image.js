exports.up = function (knex) {
  return knex.schema.createTable('image', table => {
    table.increments('id').primary()
    table.string('url')
    table.integer('sale_id').references('id').inTable('sale')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('image')
}
