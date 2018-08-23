
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex.raw('alter sequence categories_id_seq restart with 1'),
    knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({name: 'To Read'}), 
        knex('categories').insert({name: 'To Buy'}), 
        knex('categories').insert({name: 'To Watch'}), 
        knex('categories').insert({name: 'To Visit'})
      ])
    })
  ])
};
