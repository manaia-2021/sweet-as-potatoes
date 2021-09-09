exports.up = function (knex) {
  return knex.schema.createTable('sale', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('street')
    table.string('suburb')
    table.string('city')
    table.text('description')
    table.date('date')
    table.time('startTime')
    table.time('endTime')
    table.string('imageUrl', 2000)
    table.string('password')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('sale')
}
