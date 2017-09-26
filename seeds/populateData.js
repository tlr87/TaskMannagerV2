exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DataTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('DataTable').insert([
        {id: 1, text: 'Joe', numbers:20},
        {id: 2, text: 'Ted',numbers:30},
        {id: 3, text: 'Bob',numbers:50}
      ]);
    });
};
