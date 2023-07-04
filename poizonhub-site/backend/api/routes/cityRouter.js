import {Router} from "express";
import {cityController} from "../controllers/cityController.js";

export const cityRouter = new Router()

cityRouter.get('/cities', cityController.getCities)