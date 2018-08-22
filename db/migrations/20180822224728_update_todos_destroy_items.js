
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('items'),
      knex.schema.table('todos', function(table){
      table.string('description')
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('items', function(table) {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.integer('todo_id').unsigned().notNullable()
        table.foreign('todo_id').references('id').inTable('todos')
      }),
      knex.schema.table('todos', function(table) {
          table.dropColumn('description')
      })
  ])
};
