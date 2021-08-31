const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//IMPORTED ROUTES HERE
const slotsRouter = require("../slots/slots-router.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

//USE ROUTES HERE
server.use("/api/slots", slotsRouter);

module.exports = server;
