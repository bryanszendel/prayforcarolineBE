exports.up = function (knex) {
  return knex.schema.createTable("slot", (slot) => {
    slot.increments();
    slot.string("person_name", 255);
    slot.integer("hour").notNullable();
    slot.integer("minutes").notNullable();
    slot.timestamps(); // will create two columns: created_at, updated_at
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("slot");
};
