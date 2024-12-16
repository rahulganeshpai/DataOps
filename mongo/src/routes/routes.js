"use strict";

import { Router } from "express";
import controller from "../controller/controller";

const router = Router();
const { welcome, fetch_all, fetch_byid, delete_all } = controller();

router.get("/", welcome);
router.get("/fetchall", fetch_all);
router.post("/fetchbyid", fetch_byid);
router.get("/deleteall", delete_all);

export default router;
