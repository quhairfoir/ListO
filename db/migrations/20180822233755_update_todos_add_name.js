
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('users', function(table) {
            table.dropColumn('name')
            table.string('username')

        }),
        knex.schema.table('todos', function(table){
            table.string('name')
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('users', function(table) {
            table.string('name')
            table.dropColumn('username')

        }),
        knex.schema.table('todos', function(table){
            table.dropColumn('name')
        })
    ])
};
