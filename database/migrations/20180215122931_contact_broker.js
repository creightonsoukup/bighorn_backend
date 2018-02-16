exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact_broker', function(table) {
    table.increments()
    .unique()
    .primary();
    table.string('first_name');
    table.string('last_name');
    table.string('phone');
    table.string('email');
    table.text('message');
    table.dateTime('request_time');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact_broker');
};
