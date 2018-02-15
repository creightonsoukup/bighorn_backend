exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact_broker', function(table) {
    table.increments()
    .unique()
    .primary();
    table.string('first_name');
    table.string('last_name');
    table.string('phone');
    table.string('email');
    table.dateTime('request_time');
    table.text('message');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact_broker');
};
