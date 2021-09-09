exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('image').del()
    .then(function () {
      // Inserts seed entries
      return knex('image').insert([
        { id: 1, url: 'Dishes.jpg', sale_id: 1 },
        { id: 2, url: 'Dishes.jpg', sale_id: 2 },
        { id: 3, url: 'Dishes.jpg', sale_id: 3 },
        { id: 4, url: 'Dishes.jpg', sale_id: 4 },
        { id: 5, url: 'Dishes.jpg', sale_id: 5 }
      ])
    })
}
