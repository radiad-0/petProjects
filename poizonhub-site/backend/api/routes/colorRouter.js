import {Router} from "express";
import {colorController} from "../controllers/colorController.js";

export const colorRouter = new Router()

colorRouter.get('/colors', colorController.getColors)