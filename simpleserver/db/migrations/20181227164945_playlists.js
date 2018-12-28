
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ships', function (table) {
        table.increments('id').primary();
        table.string('name').notNull();
        table.string('path').notNull();
        table.integer('user_id').references('users.id').notNull();
        table.integer('current_track').notNull();
        table.integer('current_position_millis').notNull();
        table.boolean('is_paused').notNull();
        table.integer('time_stamp').notNull();
        table.string('pimg');     
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ships');  
};
