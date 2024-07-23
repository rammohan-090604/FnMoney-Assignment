/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_data').truncate()
  await knex('user_data').insert([
    {email: 'nunerammohan@gmail.com', password: 'Mohan@090604', name: 'mohan', phone: '9089897654'},
    {email: 'email@gmail.com', password: 'password', name: 'email', phone: '9090897676', },
    {email: 'root@gmail.com', password: 'root', name: 'root', phone: '9393987656'},
  ]);
};
