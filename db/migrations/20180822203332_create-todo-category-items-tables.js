
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('categories', function(table) {
      table.increments('id')
      table.string('name')
    }),
    knex.schema.createTable('todos', function(table) {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('category_id').unsigned().notNullable()

      table.foreign('user_id').references('id').inTable('users')
      table.foreign('category_id').references('id').inTable('categories')
    }),
    knex.schema.createTable('items', function(table) {
      table.increments('id')
      table.string('name')
      table.string('description')
      table.integer('todo_id').unsigned().notNullable()

      table.foreign('todo_id').references('id').inTable('todos')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('todos'),
    knex.schema.dropTable('items')
  ])
};
