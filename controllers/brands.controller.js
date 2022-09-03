export const brandsController = {
    getBrand: (req, res) => {
        res.json({
            topBrand: "Zilli",
            brandTwo: "Prada",
            brandThree: "Leon"
        })
    },

    addBrand: (req, res) => {
        res.json('Вы успешно купили весь brand')
    },

    deletedBrand: (req, res) => {
        res.json('Вы успешно удалили всю коллекцию одежд и продали купленный брэнд')
    }
}