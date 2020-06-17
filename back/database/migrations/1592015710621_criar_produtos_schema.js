'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CriarProdutosSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.string('name', 80).notNullable().unique()
      table.string('brand').notNullable()
      table.string('type').notNullable()
      table.integer('discount').notNullable()
      table.integer('price').notNullable()
      table.string('info').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = CriarProdutosSchema
