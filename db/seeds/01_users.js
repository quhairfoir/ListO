exports.seed = function(knex, Promise) {
  return Promise.all([
    knex.raw("alter sequence users_id_seq restart with 1"),
    knex("users")
      .del()
      .then(function() {
        return Promise.all([
          knex("users").insert({
            username: "Alice98",
            first_name: "Alice",
            last_name: "Smith",
            email: "allywally@gmail.com",
            password: "password123"
          }),
          knex("users").insert({
            username: "ReggaeBeatz",
            first_name: "Bob",
            last_name: "Marley",
            password: "whatchagunnadowhentheycome4u"
          })
        ]);
      })
  ]);
};
