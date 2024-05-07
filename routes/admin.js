const router = require("express").Router()
const {
  toggleUserStatus,
  toggleCardStatus,
  adminReports
} = require("../controllers/admin.controller")
const { isAuthenticated, isAuthorized } = require("../middleware/auth")

router.route("/admin/user/status").put(isAuthenticated, isAuthorized("admin"), toggleUserStatus)
router.route("/admin/reports").get(isAuthenticated, isAuthorized("admin"), adminReports)

router
    .route("/admin/card/status")
    .put(isAuthenticated, isAuthorized("admin"), toggleCardStatus)

module.exports = router
