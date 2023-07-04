import {Router} from "express";
import {sizeController} from "../controllers/sizeController.js";

export const sizeRouter = new Router()

sizeRouter.get('/sizes', sizeController.getSizes)