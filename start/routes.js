const express = require("express");
const cors = require("cors");
const error = require("../middleware/error");
const card = require("../routes/card");
const user = require("../routes/user");
const language = require("../routes/language");
const mainIcons = require("../routes/mainicons");
const floatingIcons = require("../routes/floatingicons");
const admin = require("../routes/admin");
const testimonial = require("../routes/testimonials");
const content = require("../routes/content");
const designs = require("../routes/design");
const images = require("../routes/images");

module.exports = function (server) {
  server.use(
    cors({
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      origin: "*",
    })
  );
  server.use(express.json({ limit: "50mb" }));
  server.use(express.urlencoded({ limit: "50mb", extended: true }));
  server.use("/api/v1", card);
  server.use("/api/v1", user);
  server.use("/api/v1", language);
  server.use("/api/v1", mainIcons);
  server.use("/api/v1", floatingIcons);
  server.use("/api/v1", admin);
  server.use("/api/v1", testimonial);
  server.use("/api/v1", content);
  server.use("/api/v1", designs);
  server.use("/api/v1", images);
  server.use(error);
};
