exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        { id: 1, name: 'Dishes', price: 5.50, quantity: 3, category_id: 5, sale_id: 1 },
        { id: 2, name: 'SNES Controller (no wire)', price: 6.90, quantity: 1, category_id: 2, sale_id: 1 },
        { id: 3, name: 'Stained Mattress (free bed bugs included)', price: 10.00, quantity: 1, category_id: 4, sale_id: 1 },
        { id: 4, name: 'Organic Plants', price: 4.20, quantity: 1, category_id: 3, sale_id: 1 },
        { id: 5, name: 'Half eaten bread loaf', price: 120.00, quantity: 1, category_id: 10, sale_id: 2 },
        { id: 6, name: 'Toilet Paper', price: 540.00, quantity: 5, category_id: 10, sale_id: 2 },
        { id: 7, name: 'Pink Floyd T-Shirt', price: 1.00, quantity: 1, category_id: 6, sale_id: 1 },
        { id: 8, name: 'Awesome tales of Nobody', price: 2.00, quantity: 3, category_id: 7, sale_id: 1 },
        { id: 9, name: 'Cricket Bat', price: 5.00, quantity: 1, category_id: 9, sale_id: 1 }
      ])
    })
}
