'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateImagesSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.string('product_name').references('nome').inTable('produtos')
      table.string('path')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_images')
  }
}

module.exports = CreateImagesSchema
