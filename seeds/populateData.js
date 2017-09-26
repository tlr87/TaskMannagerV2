exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DataTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('DataTable').insert([
        {id: 1, Project: 'Project-01', Task:'Task-01',Person:"Joe", Priority:5, Details:'example', Colour:'red'},
        {id: 2, Project: 'Project-02', Task:'Task-02',Person:"Bob", Priority:3, Details:'example', Colour:'yellow'}
      ]);
    });
};
