import { Router } from 'express'
import { productsController } from '../controllers/products.controller.js'

const routerProducts = Router();

//Дальше подключаем к роутам = контроллерs c методами http 

routerProducts.get('/products', productsController.getProduct)

routerProducts.get('/products/:id', productsController.getProductById)

routerProducts.post('/products', productsController.addProducts)

routerProducts.delete('/products/:id', productsController.removeProductsById)

export {routerProducts};