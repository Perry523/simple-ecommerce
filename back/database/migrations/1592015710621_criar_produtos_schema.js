'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CriarProdutosSchema extends Schema {
  up () {
    this.create('produtoom s', (table) => {
      table.string('nome', 80).notNullable().unique()
      table.string('marca')
      table.integer('desconto')
      table.integer('preco').notNullable()
      table.string('info')
      table.timestamps()
    })
  }

  down () {
    this.drop('produtoom s')
  }
}

module.exports = CriarProdutosSchema
