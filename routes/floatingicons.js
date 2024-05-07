const router = require("express").Router()
const {
  add,
  all,
  update,
  byId,
  deleteIcon,
} = require("../controllers/floating.icons.controller")
const { isAuthenticated, isAuthorized } = require("../middleware/auth")

router.route("/floating-icon/id/:id").get(byId)
router
  .route("/floating-icon")
  .get(all)
  .post(isAuthenticated, isAuthorized("admin"), add)
  .put(isAuthenticated, isAuthorized("admin"), update)
router
  .route("/floating-icon/:id")
  .delete(isAuthenticated, isAuthorized("admin"), deleteIcon)

module.exports = router
