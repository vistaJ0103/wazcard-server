const router = require("express").Router();
const { update, all } = require("../controllers/images.controller");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");

router
  .route("/images")
  .get(all)
  .put(isAuthenticated, isAuthorized("admin"), update);

module.exports = router;
