
import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import {getNotes, addNote} from '../controllers/noteController.js'


export const noteRouter = new Router({mergeParams: true});

noteRouter
.get("/", protect, getNotes)
.post('/',protect, addNote)