

import express from "express";
import { createBlog } from "../controllers/blogcontroller.js";

const router = express.Router();


router.post("/", createBlog);

export default router;

