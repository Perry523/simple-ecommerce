'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateVariantsSchema extends Schema {
  up () {
    this.create('variants', (table) => {
      table.string('product_name').references('name').inTable('products')
      table.string('variant').notNullable()
      table.integer('stock')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_variants')
  }
}

module.exports = CreateVariantsSchema
