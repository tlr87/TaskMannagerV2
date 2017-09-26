exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('DataTable', (table) => {
    table.increments('id')
    table.string('Project')
    table.string('Task')
    table.string('Person')
    table.float('Priority')
    table.string('Details')
    table.string('Colour')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('DataTable')
};
