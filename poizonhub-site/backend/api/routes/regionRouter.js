import {Router} from "express";
import {regionController} from "../controllers/regionController.js";

export const regionRouter = new Router()

regionRouter.get('/regions', regionController.getRegions)