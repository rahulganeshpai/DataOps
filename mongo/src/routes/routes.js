"use strict";

import { Router } from "express";
import controller from "../controller/controller";

const router = Router();
const { fetch_all, fetch_byid, delete_all, update_all } = controller();

// GET
router.get("/fetchall", fetch_all);
router.get("/deleteall", delete_all);

// POST
router.post("/fetchbyid", fetch_byid);
router.post("/updateall", update_all);

export default router;
