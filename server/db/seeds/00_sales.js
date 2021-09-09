exports.seed = function (knex) {
  // Deletes ALL existing entries
  const date = new Date()
  return knex('sale').del()
    .then(function () {
      // Inserts seed entries
      return knex('sale').insert([
        { id: 1, title: 'awesome garage sale', street: '1 Somewhere Lane', suburb: 'Aranui', city: 'Christchurch', description: 'all items $1. organic plants available. bike wheel.', date: date.toDateString(), startTime: '14:00', endTime: '15:00', password: 'abcd' },
        { id: 2, title: 'Moving to Easter Island', street: '2/28 Nosedive Road', suburb: 'Petone', city: 'Wellington', description: 'everything must go', date: date.toDateString(), startTime: '05:00', endTime: '05:15', password: 'abcd' },
        { id: 3, title: 'Fundraising for Fools', street: '14B Dragons Den', suburb: 'Manukau', city: 'Auckland', description: 'foolish items', date: date.toDateString(), startTime: '16:00', endTime: '16:20', password: 'abcd' },
        { id: 4, title: 'Selling everything to buy an Avocado Farm!', street: '45 Avocado Ave', suburb: 'Brooklyn', city: 'Wellington', description: 'Just buy it bro', date: date.toDateString(), startTime: '07:00', endTime: '07:20', password: 'abcd' },
        { id: 5, title: 'Store closing down sale!', street: '1 Business Fail St', suburb: 'Naenae', city: 'Wellington', description: 'COVID killed my business, please finish me off', date: date.toDateString(), startTime: '03:00', endTime: '16.20', password: 'abcd' }
      ])
    })
}
