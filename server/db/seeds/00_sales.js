exports.seed = function (knex) {
  // Deletes ALL existing entries
  const date = new Date()
  return knex('sale').del()
    .then(function () {
      // Inserts seed entries
      return knex('sale').insert([
        { id: 1, title: 'awesome garage sale', street: '1 somewhere lane', suburb: 'Aranui', city: 'Christchurch', description: 'all items $1. organic plants available. bike wheel.', date: date.toDateString(), startTime: '14:00', endTime: '15:00', imageURL: 'https://placekitten.com/200/300', password: 'abcd' },
        { id: 2, title: 'not so awesome garage sale', street: '1 somewhere lane', suburb: 'Petone', city: 'wellington', description: 'not much', date: date.toDateString(), startTime: '05:00', endTime: '05:15', imageURL: 'https://placekitten.com/200/300', password: 'abcd' }
      ])
    })
}
