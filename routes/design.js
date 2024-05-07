const router = require("express").Router();
const {
  add,
  all,
  update,
  byId,
  deleteIcon,
} = require("../controllers/designs.controller");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");

router.route("/design/id/:id").get(byId);
router
  .route("/design")
  .get(all)
  .post(isAuthenticated, isAuthorized("admin"), add)
  .put(isAuthenticated, isAuthorized("admin"), update);
router
  .route("/design/:id")
  .delete(isAuthenticated, isAuthorized("admin"), deleteIcon);

module.exports = router;
