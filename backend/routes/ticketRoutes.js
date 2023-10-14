import express from "express";
import { getTickets,createTicket } from "../controllers/ticketController.js";
import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";

export const ticketRouter = new Router();

ticketRouter
  .route('/').get(protect, getTickets).post(protect, createTicket)


