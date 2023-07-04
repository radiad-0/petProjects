import express from 'express'
import {router} from "./serverModules/router.js"

const app = express()
const PORT = 3000;

function start() {
    try {
        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log(`listening port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

app.use(express.json())
app.use(express.static("../client/"))
app.use(router)
app.use((req, res) => {
    res
        .status(404)
        .send('404 not found')
})