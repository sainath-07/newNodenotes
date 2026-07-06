import express from "express";
import { homeControllerLogic } from "../controllers/home.controller.js";

const route = express.Router()

route.get("/",homeControllerLogic)

export default route