import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ticketModel } from "../models/ticketModel.js";


// @desc    Get user tickets
// @ route  GET /api/tickets
// @access  Private
export const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'getTickets'})
})

// @desc    Create ne ticket
// @ route  POST /api/tickets
// @access  Private
export const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'createTickets'})
})