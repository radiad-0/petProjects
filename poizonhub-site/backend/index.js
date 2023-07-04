import express from 'express'
import {userRouter} from "./api/routes/userRouter.js";
import {colorRouter} from "./api/routes/colorRouter.js";
import {sizeRouter} from "./api/routes/sizeRouter.js";
import {regionRouter} from "./api/routes/regionRouter.js";
import {cityRouter} from "./api/routes/cityRouter.js";

const app = express()
const PORT = 9630;

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
app.use('/api', userRouter)
app.use('/api', sizeRouter)
app.use('/api', colorRouter)
app.use('/api', regionRouter)
app.use('/api', cityRouter)

app.use((req, res) => {
    res
        .status(404)
        .send('404 not found<br>test 123 123')
})