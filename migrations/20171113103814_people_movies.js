exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('people_movies', (table) => {
      table.increments(),
        table.integer('people_id'),
        table.integer('movies_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people_movies')
  ])
};
