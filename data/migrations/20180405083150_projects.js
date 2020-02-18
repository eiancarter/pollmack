exports.up = function(knex) {
    return knex.schema.createTable('candidates', function(candidates) {
        candidates.increments();

        candidates.string('name', 128).notNullable();
        candidates.text('party').notNullable();
        candidates.text('office').notNullable();
        candidates.boolean('completed').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('candidates');
};
