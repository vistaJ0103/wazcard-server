const router = require("express").Router();
const {
  toggleUserStatus,
  toggleCardStatus,
  adminReports,
  toggleRole,
  changePasswordByAdmin,
  deleteUser,
} = require("../controllers/admin.controller");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");

router
  .route("/admin/user/status")
  .put(isAuthenticated, isAuthorized("admin"), toggleUserStatus);
router
  .route("/admin/role")
  .put(isAuthenticated, isAuthorized("admin"), toggleRole);
router
  .route("/admin/reports")
  .get(isAuthenticated, isAuthorized("admin"), adminReports);

router
  .route("/admin/card/status")
  .put(isAuthenticated, isAuthorized("admin"), toggleCardStatus);
router
  .route("/admin/password/change")
  .put(isAuthenticated, isAuthorized("admin"), changePasswordByAdmin);

router
  .route("/user/delete/:id")
  .delete(isAuthenticated, isAuthorized("admin"), deleteUser);

module.exports = router;
