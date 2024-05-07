const winston = require("winston")
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const cloudinary = require("cloudinary").v2

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/.env" })
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

require("./connection/connection")
require("./start/logging")()
require("./start/routes")(app)

server.listen(process.env.PORT, () =>
  winston.info(`Server is running on ${process.env.PORT}`),
)
