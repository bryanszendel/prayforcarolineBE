const db = require("../database/db-config.js");

module.exports = {
  find,
  findById,
  add,
  edit,
  remove,
};

function find() {
  return db("slot");
}

function findById(id) {
  return db("slot").where("id", id).first();
}

function add(item) {
  return db("slot").insert(item);
}

function edit(id, person_name) {
  return db("slot").update({ person_name }).where("id", id);
}

function remove(id) {
  return db("slot").del().where("id", id);
}
