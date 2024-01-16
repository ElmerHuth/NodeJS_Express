const express = require('express')
const serverless = require('serverless-http')
const path = require('path')

const api = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.../app.html'))
})

api.use("/api", router)

export const handler = serverless(api)