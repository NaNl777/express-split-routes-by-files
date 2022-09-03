export const productsController = {
    getProduct: (req, res) => {
      res.json({
        mango: 4,
        avakado: 6,
        baunti: 14,
        arbu: 2
      })
    },

    getProductById: (req, res) => {
        res.json(`Вот ваш продукт ${req.params.id}, спасибо за покупку!`)
    },

    addProducts: (req, res) => {
        res.json('Вы успешно добавили продукт в свою корзину!')
    },
    
    removeProductsById: (req, res) => {
        res.json(`Вы успешно удалили продукт: ${req.params.id}`)
    }

}