import asyncHandler from "express-async-handler";
import { noteModel } from "../models/noteModel.js";
import { ticketModel } from "../models/ticketModel.js";
import { userModel } from "../models/userModel.js";

// @desc    Get notes for a ticket
// @ route  GET /api/tickets/:ticketId/notes
// @access  Private
export const getNotes = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await userModel.findById(req.user.id);

  if (!user) {
    res.status();
    throw new Error("User not found");
  }

  const ticket = await ticketModel.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const notes = await noteModel.find({ ticket: req.params.ticketId });

  res.status(200).json(notes);
});

// @desc    Create Ticket note
// @ route  POST /api/tickets/:ticketId/notes
// @access  Private
export const addNote = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  // const user = await userModel.findById(req.user.id);

  // if (!user) {
  //   res.status();
  //   throw new Error("User not found");
  // }

  const ticket = await ticketModel.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const note = await noteModel.create({
    text: req.body.text,
    isStaff: false,
    ticket: req.params.ticketId,
    user: req.user.id,
  });

  res.status(200).json(note);
});
