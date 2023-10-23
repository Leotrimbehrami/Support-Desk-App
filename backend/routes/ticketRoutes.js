import express from "express";
import { getTickets, getTicket, createTicket, deleteTicket, updateTicket } from "../controllers/ticketController.js";
import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { noteRouter } from "./noteRoutes.js";

 // Re-route into note router
 const router = new Router();

 router.use("/:ticketId/notes", noteRouter);

export const ticketRouter = router;

ticketRouter
  .get("/", protect, getTickets)
  .post("/", protect, createTicket)
  .get("/:id", protect, getTicket)
  .delete('/:id', protect, deleteTicket)
  .put('/:id', protect, updateTicket)


