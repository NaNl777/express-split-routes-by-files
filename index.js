//Импортируем пакет express
import express from "express";
import { routerBrands } from "./routes/brands.route.js";
import { routerProducts } from "./routes/products.route.js"


const app = express();

//Создаем порты для нашего сервера
const port = 6000;

app.use(routerBrands)
app.use(routerProducts)


//Запускаем наш сервер:D
app.listen(port, () => {
   console.log('Server has been started...')
})
