import express from "express";
import { getTickets, getTicket, createTicket, deleteTicket, updateTicket } from "../controllers/ticketController.js";
import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";

export const ticketRouter = new Router();

ticketRouter
  .get("/", protect, getTickets)
  .post("/", protect, createTicket)
  .get("/:id", protect, getTicket)
  .delete('/:id', protect, deleteTicket)
  .put('/:id', protect, updateTicket)


