/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id')
    table.string('description').notNullable().unique()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('profiles');
};
