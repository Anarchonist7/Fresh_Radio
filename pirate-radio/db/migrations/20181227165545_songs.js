
exports.up = function(knex, Promise) {
    return knex.schema.createTable('songs', function (table) {
      table.increments('id').primary();
      table.string('title').notNull();
      table.string('artist').notNull();
      table.string('album').notNull();
      table.string('audio_url').notNull();
      table.integer('ship_id').references('ships.id').notNull();
      table.integer('order');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('songs');
  };

