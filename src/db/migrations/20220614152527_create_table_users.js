/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('email').notNullable().unique()
    table.integer('profile_id').notNullable()
    table.foreign('profile_id').references('id').inTable('profiles')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
