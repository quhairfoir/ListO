exports.seed = function(knex, Promise) {
  return Promise.all([
    knex.raw('alter sequence todos_id_seq restart with 1'),
    knex('todos').del()
    .then(function () {
      return Promise.all([
        knex('todos').insert({user_id: 1, category_id: 1, name: 'Confessions of a Shopaholic', description: 'Book'}),
        knex('todos').insert({user_id: 1, category_id: 1, name: 'Wuthering Heights', description: 'Book'}),
        knex('todos').insert({user_id: 1, category_id: 2, name: 'Ugg Boots', description: 'clothing'}),
        knex('todos').insert({user_id: 1, category_id: 2, name: 'Selfie Stick', description: 'accessories'}),
        knex('todos').insert({user_id: 1, category_id: 3, name: 'Gossip Girl', description: 'tv show'}),
        knex('todos').insert({user_id: 1, category_id: 3, name: 'Jersey Shore', description: 'tv show'}),
        knex('todos').insert({user_id: 1, category_id: 4, name: 'Starbucks', description: 'coffee'}),
        knex('todos').insert({user_id: 1, category_id: 4, name: 'Urban Outfitters', description: 'store'}),
    
        knex('todos').insert({user_id: 2, category_id: 1, name: 'Bible', description: 'Book'}),
        knex('todos').insert({user_id: 2, category_id: 1, name: 'Twilight', description: 'Book'}),
        knex('todos').insert({user_id: 2, category_id: 2, name: 'Tequila', description: 'beverage'}),
        knex('todos').insert({user_id: 2, category_id: 2, name: 'papers', description: 'rollies'}),
        knex('todos').insert({user_id: 2, category_id: 3, name: 'Bojack Horseman', description: 'tv show'}),
        knex('todos').insert({user_id: 2, category_id: 3, name: 'Dancing with the Stars', description: 'tv show'}),
        knex('todos').insert({user_id: 2, category_id: 4, name: 'vape store', description: 'store'}),
        knex('todos').insert({user_id: 2, category_id: 4, name: 'bio threads', description: 'store'})
      ])
    })
  ])
};