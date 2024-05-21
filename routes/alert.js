const router = require("express").Router();
const {
  add,
  all,
  update,
  byId,
  deleteIcon,
  dataUpdate,
  byUId,
  countUpdate,
} = require("../controllers/alert.controller");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");

router.route("/alert/id/:id").get(isAuthenticated, isAuthorized("admin"), byId);
router.route("/alert/uid/:id").get(byUId);
router
  .route("/alert")
  .get(all)
  .post(isAuthenticated, isAuthorized("admin"), add)
  .put(isAuthenticated, isAuthorized("admin"), update);
router
  .route("/alert/update")
  .put(isAuthenticated, isAuthorized("admin"), dataUpdate);
router.route("/alert/count").put(countUpdate);
router
  .route("/alert/:id")
  .delete(isAuthenticated, isAuthorized("admin"), deleteIcon);

module.exports = router;
