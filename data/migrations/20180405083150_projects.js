exports.up = function(knex) {
    return knex.schema.createTable('candidates', function(candidates) {
        candidates.increments();

        candidates.string('name', 128).notNullable();
        candidates.text('description').notNullable();
        candidates.boolean('completed').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('candidates');
};
