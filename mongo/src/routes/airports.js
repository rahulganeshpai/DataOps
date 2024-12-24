"use strict";

import { Router } from "express";
import airports_controller from "../controller/airports";

const router = Router();
const { fetch_all, fetch_byid, delete_all, update_all } = airports_controller();

//GET
router.get("/fetchall", fetch_all);

// POST
router.post("/fetchbyid", fetch_byid);
router.post("/updateall", update_all);
router.post("/deleteall", delete_all);

export default router;
