exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DataTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('DataTable').insert([
        {id: 1, Project: 'Project-01', Task:'Task-01',Person:"Joe", Priority:5, Details:'example', Colour:'Red'},
        {id: 2, Project: 'Project-02', Task:'Task-01',Person:"Bob", Priority:4, Details:'example', Colour:'Yellow'},
        {id: 3, Project: 'Project-03', Task:'Task-01',Person:"Ted", Priority:2, Details:'example', Colour:'Green'},
        {id: 4, Project: 'Project-02', Task:'Task-02',Person:"Fred", Priority:4, Details:'example', Colour:'Teal'},
        {id: 5, Project: 'Project-03', Task:'Task-02',Person:"Nate", Priority:2, Details:'example', Colour:'Green'},
        {id: 6, Project: 'Project-03', Task:'Task-03',Person:"Nate", Priority:2, Details:'example', Colour:'Orange'}
      ]);
    });
};
