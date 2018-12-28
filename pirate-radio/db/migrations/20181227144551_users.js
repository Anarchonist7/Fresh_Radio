
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('email').notNull();
      table.string('password_hash').notNull();
      table.string('name').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};