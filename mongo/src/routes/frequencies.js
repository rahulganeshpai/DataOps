"use strict";

import { Router } from "express";
import frequencies_controller from "../controller/frequencies";

const router = Router();
const { fetch_all } = frequencies_controller();

//GET
router.get("/fetchall", fetch_all);

export default router;
