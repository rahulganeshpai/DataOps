"use strict";

import { Router } from "express";
import controller from "../controller/controller";

const router = Router();
const { welcome_route } = controller();

router.get("/", welcome_route);

export default router;
