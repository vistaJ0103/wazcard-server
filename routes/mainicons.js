const router = require("express").Router()
const {
  add,
  all,
  update,
  byId,
  deleteIcon,
} = require("../controllers/main.icons.controller")
const { isAuthenticated, isAuthorized } = require("../middleware/auth")

router.route("/main-icon/id/:id").get(byId)
router
  .route("/main-icon")
  .get(all)
  .post(isAuthenticated, isAuthorized("admin"), add)
  .put(isAuthenticated, isAuthorized("admin"), update)
router
  .route("/main-icon/:id")
  .delete(isAuthenticated, isAuthorized("admin"), deleteIcon)

module.exports = router
