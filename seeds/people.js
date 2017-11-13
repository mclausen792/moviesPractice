exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function() {
      // Inserts seed entries
      return knex('people').insert([{
          id: 1,
          name: 'Jim Carrey',
          role: 'Actor'
        },
        {
          id: 2,
          name: 'Tom Shadyac',
          role: 'Director'
        },
        {
          id: 3,
          name: 'John Hughs',
          role: 'Director'
        },
        {
          id: 4,
          name: 'Molly Ringwald',
          role: 'Actress'
        },
        {
          id: 5,
          name: 'Kate Hudson',
          role: 'Actress'
        },
        {
          id: 6,
          name: 'Donald Petrie',
          role: 'Director'
        }
      ]);
    });
};
