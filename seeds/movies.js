exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function() {
      // Inserts seed entries
      return knex('movies').insert([{
          id: 1,
          title: 'Liar Liar',
          director_id: 2
        },
        {
          id: 2,
          title: 'Breakfast Club',
          director_id: 3
        },
        {
          id: 3,
          title: 'How to lose a guy in ten days',
          director_id: 6
        }
      ]);
    });
};
