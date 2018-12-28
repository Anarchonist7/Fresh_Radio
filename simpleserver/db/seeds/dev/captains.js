exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'barbosa@the.c', password_hash: 'password', name: 'Barbosa'},
        {id: 2, email: 'jack@newpirates.com', password_hash: 'password', name: 'Jack'},
        {id: 3, email: 'djones@hotmail.com', password_hash: 'password', name: 'Davey Jones'},
      ]);
    });
};
