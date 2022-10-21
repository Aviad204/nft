import express, { Router } from "express";
import { accountsPage } from "../controllers/accountsController";

const router: Router = express.Router()
router.get("/", accountsPage)

export default router;
