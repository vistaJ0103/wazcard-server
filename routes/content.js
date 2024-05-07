const router = require("express").Router();
const {
  updateBusiness,
  updateHero,
  updateWorking,
  getAll,
} = require("../controllers/content.controller");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");

router.route("/content").get(getAll);

router
  .route("/content/business")
  .get(getAll)
  .put(isAuthenticated, isAuthorized("admin"), updateBusiness);

router
  .route("/content/hero")
  .get(getAll)
  .put(isAuthenticated, isAuthorized("admin"), updateHero);

router
  .route("/content/working")
  .get(getAll)
  .put(isAuthenticated, isAuthorized("admin"), updateWorking);

module.exports = router;
