'use strict'
const Produto =  use('App/Models/Produto')
const Variant =  use('App/Models/Variant')
const Image =  use('App/Models/Image')
const Drive = use('Drive')
const Helpers = use('Helpers')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let product = request.only(['name','type','brand','discount','price','info'])
    //Product.create(product)
    let rawvariants = request.only('variants')
    let variantImgs = request.file('variantImgs')
    for(let i in rawvariants.variants){
      const variant = JSON.parse(rawvariants.variants[i])
      variant.product_name = product.name
      if (variantImgs !== null){
        if(variantImgs.files[i] !== undefined){
          const variantImgName = `${new Date().getTime()}.${variantImgs.files[i].subtype}`
          variant.path = '/uploads/variantImgs/'+variantImgName
          await variantImgs.files[i].move(Helpers.tmpPath('uploads/variantImgs'), {
            name: variantImgName,
          })
          if (!variantImgs.files[i].moved()) {
            return variantImgs.files[i].error()
          }
          Variant.create(variant)
        }
        else{
          variant.path = null
          Variant.create(variant)
        } 
      }
      else{
        variant.path = null
        Variant.create(variant)
        variant.create
      } 
    }   
      let file = request.file('imgs')
        if (file){
          for(let i in file.files){
            let productImgName = `${new Date().getTime()}${file.files[i].clientName}`
            await file.files[i].move(Helpers.tmpPath('uploads/ProductImgs'), {
              name: productImgName,
            })
            if (!file.files[i].moved()) {
              return file.files[i].error()
            }
            Image.create({product_name: product.name,path:'/uploads/ProductImgs/'+productImgName})
          }
        }
        else{
          return "O campo de imagem é obrigatório"
        }
    return "success"
    }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductController
