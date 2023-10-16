import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ticketModel } from "../models/ticketModel.js";
import { userModel } from "../models/userModel.js";


// @desc    Get user tickets
// @ route  GET /api/tickets
// @access  Private
export const getTickets = asyncHandler(async (req, res) => {

  // Get user using the id in the JWT
  const user = await userModel.findById(req.user.id)

  if(!user){
    res.status()
    throw new Error('User not found')
  }

  const tickets =  await ticketModel.find({user: req.user.id})

  res.status(200).json(tickets)
})

// @desc    Get user ticket
// @ route  GET /api/tickets/:id
// @access  Private
export const getTicket = asyncHandler(async (req, res) => {

  // Get user using the id in the JWT
  const user = await userModel.findById(req.user.id)

  if(!user){
    res.status()
    throw new Error('User not found')
  }

  const ticket =  await ticketModel.findById(req.params.id)

  if(!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if(ticket.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('Not Authorized')
  }

  res.status(200).json(ticket)
})

// @desc    Create new ticket
// @ route  POST /api/tickets
// @access  Private
export const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;
  if (!product || !description) {
    res.status();
    throw new Error("Please add a product and a description");
  }

  // Get user using the id in the JWT
  const user = await userModel.findById(req.user.id);

  if (!user) {
    res.status();
    throw new Error("User not found");
  }

  const ticket = await ticketModel.create({
    product,
    description,
    user: req.user.id,
    status: 'new'
  })
  res.status(201).json(ticket);
})

// @desc    Delete ticket
// @ route  DELELTE /api/tickets/:id
// @access  Private
export const deleteTicket = asyncHandler(async (req, res) => {

  // Get user using the id in the JWT
  const user = await userModel.findById(req.user.id)

  if(!user){
    res.status()
    throw new Error('User not found')
  }

  const ticket =  await ticketModel.findById(req.params.id)

  if(!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if(ticket.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('Not Authorized')
  }

  await ticketModel.findByIdAndRemove(req.params.id)

  res.status(200).json({success: true})
})

// @desc    Update ticket
// @ route  PUT /api/tickets/:id
// @access  Private
export const updateTicket = asyncHandler(async (req, res) => {

  // Get user using the id in the JWT
  const user = await userModel.findById(req.user.id)

  if(!user){
    res.status()
    throw new Error('User not found')
  }

  const ticket =  await ticketModel.findById(req.params.id)

  if(!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if(ticket.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedTicket = await ticketModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedTicket);
})