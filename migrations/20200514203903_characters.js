
exports.up = function(knex) {
    return knex.schema.createTable('Characters', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable();
        tbl.text('department', 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExits('Characters');
};
