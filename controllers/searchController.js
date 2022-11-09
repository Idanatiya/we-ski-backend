const asyncHandler = require('express-async-handler')
const axios = require('axios')

const API_URL = "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator"

const setSearch = asyncHandler (async (req,res) => {
    const params = {
        query: req.body
    }
    const response = await axios.post(API_URL, params)
    const sortedHotels = response.data?.body?.accommodations.sort((resultA,resultB) => {
        const {AmountAfterTax : totalPriceA} = resultA.PricesInfo
        const {AmountAfterTax: totalPriceB} = resultB.PricesInfo
        return totalPriceA - totalPriceB
    })
    res.status(200).json(sortedHotels)
})





module.exports = {
    setSearch
}