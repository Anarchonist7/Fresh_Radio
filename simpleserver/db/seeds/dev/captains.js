exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'barbosa', password_hash: 'password', name: 'Barbosa'},
        {id: 2, email: 'jack', password_hash: 'password', name: 'Jack Sparrow'},
        {id: 3, email: 'davery', password_hash: 'password', name: 'Davey Jones'},
        {id: 4, email: 'aaron', password_hash: 'password', name: 'DJ A A Ron'},
        {id: 5, email: 'dawson', password_hash: 'password', name: 'DJ_WISH'},
        {id: 6, email: 'eric', password_hash: 'password', name: 'eeedubs'},
      ]);
    });
};
