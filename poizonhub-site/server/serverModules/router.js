import {Router} from "express"
import {getTrackInfoHTML} from "./tracking.js"
import path from "path"
import bodyParser from 'body-parser'

let urlencodedParser = bodyParser.urlencoded({ extended: false })
export const router = new Router()
const __dirname = path.resolve()
const createPath = (page) => path.resolve(__dirname, '../client', `${page}.html`)


router.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

router.get('/tracking', (req, res) => {
    res.sendFile(createPath('tracking'))
})

router.post('/tracking', urlencodedParser,  (req, res) => {
    getTrackInfoHTML(req.body.track).then(res.send.bind(res))
})

router.get('/calculate', (req, res) => {
    res.sendFile(createPath('calculator'))
})

router.get('/size', (req, res) => {
    res.sendFile(createPath('size'))
})

router.get('/order', (req, res) => {
    res.sendFile(createPath('order'))
})

router.get('/faq', (req, res) => {
    res.sendFile(createPath('faq'))
})