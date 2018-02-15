const knex = require('./knex')

function Signups() {
  return knex('signups')
}

module.exports = {
  createSignup: function(first_name, last_name, email) {
    return Signups().insert({
      first_name: first_name,
      last_name: last_name,
      email: email
    })
  }
}
