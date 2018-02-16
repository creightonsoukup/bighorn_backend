const knex = require('./knex')

function Signups() {
  return knex('subscribe')
}

function contactBroker() {
  return knex('contact_broker')
}

module.exports = {
  createSignup: function(first_name, last_name, email) {
    return Signups().insert({
      first_name: first_name,
      last_name: last_name,
      email: email
    })
  },
  contactBroker: function(first_name, last_name, email, phone, message) {
    return contactBroker().insert({
      first_name: first_name,
      last_name:last_name,
      email: email,
      phone: phone,
      message: message,
      request_time: new Date()
    })
  }
}
