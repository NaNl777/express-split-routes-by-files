import { Router } from "express";
import { brandsController } from "../controllers/brands.controller.js";

const routerBrands = Router();

//Дальше подключаем контроллеры к роутам через методы HTTP 

routerBrands.get('/brands', brandsController.getBrand)

routerBrands.post('/brands',brandsController.addBrand)

routerBrands.delete('/brands', brandsController.deletedBrand)


export {routerBrands}
