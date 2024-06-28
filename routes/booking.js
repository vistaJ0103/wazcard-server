const router = require("express").Router();
const { add, byId, send } = require("../controllers/booking.controller");
const { isAuthenticated } = require("../middleware/auth");

router.route("/booking/id/:id").get(byId);
router.route("/booking").post(isAuthenticated, add);
router.route("/booking/send").post(send);

module.exports = router;
