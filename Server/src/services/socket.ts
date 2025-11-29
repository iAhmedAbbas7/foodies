// <== IMPORTS ==>
import http from "http";
import express from "express";
import { Server } from "socket.io";

// <== CREATING APP INSTANCE ==>
const app = express();

// <== CREATING SERVER ==>
const server = http.createServer(app);

// <== SOCKET SERVER INSTANCE ==>
const io = new Server(server, {
  // <== CORS OPTIONS ==>
  cors: {
    // <== ORIGIN ==>
    origin: ["http://localhost:5173", "http://localhost:5174"],
    // <== METHODS ==>
    methods: ["GET", "POST"],
  },
});

// EXPORTING THE APP, SERVER AND IO
export { app, server, io };
