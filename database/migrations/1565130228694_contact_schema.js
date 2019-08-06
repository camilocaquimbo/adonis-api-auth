'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      //CAM Agregado
      table.string('name')
      table.string('email')
      table.string('title')
      table.string('tel')
      table.timestamps()
      //CAM ref a tabla Users
      table.integer('user_id').unsigned().references('id').inTable('users');
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
