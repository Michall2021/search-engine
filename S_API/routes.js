const express = require('express')
const router = express.Router()
const SearchData = require('./models/searchdata.model')

//get all search data
router.get('/indexall', async (req, res) => {
    try {
        const searchdata = await SearchData.find()
        return res.status(200).json(searchdata)
    } catch (error) {
        return req.status(500).json({"error":error})
    }
})

//get all matches of particular word
router.get('/indexall/:keyword', async (req, res) => {
    try {
        const _keyword = req.params.keyword
        const searchdata = await SearchData.find({word :_keyword})
        return res.status(200).json(searchdata)
    } catch (error) {
        return req.status(500).json({"error":error})
    }
})


router.post('/addindex', async (req, res) => {
    try {
        console.log(req.body)
        const { word } = req.body
        const { source } = req.body
        const { occurences } = req.body

        const DataEntry = await SearchData.create({
            word,
            source,
            occurences
        })
        return res.status(201).json(DataEntry)

    }
    catch (error) { 
        return res.status(500).json({"error":error})
    }
})



module.exports = router