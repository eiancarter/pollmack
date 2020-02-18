exports.up = function(knex) {
    return knex.schema.createTable('contributions', function(contributions) {
        contributions.increments();

        contributions
            .integer('candidate_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('candidates')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        contributions.decimal('amount', 128).notNullable();
        contributions.text('notes').notNullable();
        contributions.boolean('completed').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contributions');
};
