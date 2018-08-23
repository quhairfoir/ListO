exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, username: 'Alice98', first_name: 'Alice', last_name:'Smith', email: 'allywally@gmail.com', password: 'password123'}),
        knex('users').insert({id: 2, username: 'ReggaeBeatz', first_name: 'Bob', last_name:'Marley', password:'whatchagunnadowhentheycome4u'}),
        knex('categories').insert({id: 1, name: 'To Read'}), 
        knex('categories').insert({id: 2, name: 'To Buy'}), 
        knex('categories').insert({id: 3, name: 'To Watch'}), 
        knex('categories').insert({id: 4, name: 'To Visit'}),

        knex('todos').insert({id: 1, user_id: 1, category_id: 1, name: 'Confessions of a Shopaholic', description: 'Book'}),
        knex('todos').insert({id: 2, user_id: 1, category_id: 1, name: 'Wuthering Heights', description: 'Book'}),
        knex('todos').insert({id: 3, user_id: 1, category_id: 2, name: 'Ugg Boots', description: 'clothing'}),
        knex('todos').insert({id: 4, user_id: 1, category_id: 2, name: 'Selfie Stick', description: 'accessories'}),
        knex('todos').insert({id: 5, user_id: 1, category_id: 3, name: 'Gossip Girl', description: 'tv show'}),
        knex('todos').insert({id: 6, user_id: 1, category_id: 3, name: 'Jersey Shore', description: 'tv show'}),
        knex('todos').insert({id: 7, user_id: 1, category_id: 4, name: 'Starbucks', description: 'coffee'}),
        knex('todos').insert({id: 8, user_id: 1, category_id: 4, name: 'Urban Outfitters', description: 'store'}),

        knex('todos').insert({id: 9, user_id: 2, category_id: 1, name: 'Bible', description: 'Book'}),
        knex('todos').insert({id: 10, user_id: 2, category_id: 1, name: 'Twilight', description: 'Book'}),
        knex('todos').insert({id: 11, user_id: 2, category_id: 2, name: 'Tequila', description: 'beverage'}),
        knex('todos').insert({id: 12, user_id: 2, category_id: 2, name: 'papers', description: 'rollies'}),
        knex('todos').insert({id: 13, user_id: 2, category_id: 3, name: 'Bojack Horseman', description: 'tv show'}),
        knex('todos').insert({id: 14, user_id: 2, category_id: 3, name: 'Dancing with the Stars', description: 'tv show'}),
        knex('todos').insert({id: 15, user_id: 2, category_id: 4, name: 'vape store', description: 'store'}),
        knex('todos').insert({id: 16, user_id: 2, category_id: 4, name: 'bio threads', description: 'store'})
      ]);
    });
};
