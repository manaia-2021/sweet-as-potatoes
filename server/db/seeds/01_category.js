exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        { id: 1, name: 'Homeware' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Plants' },
        { id: 4, name: 'Bedroom' },
        { id: 5, name: 'Kitchenware' },
        { id: 6, name: 'Clothing' },
        { id: 7, name: 'Books' },
        { id: 8, name: 'Music' },
        { id: 9, name: 'Sports' },
        { id: 10, name: 'Bathroom' },
        { id: 11, name: 'Miscellaneous' }
      ])
    })
}
