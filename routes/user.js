const router = require("express").Router();
const {
  register,
  login,
  all,
  update,
  userById,
  changePassword,
  deleteUser,
  forgotPassword,
  resetPassword,
  registerAdmin,
  me,
} = require("../controllers/user.controller");
const { isAuthenticated } = require("../middleware/auth");

router.route("/user/register").post(register);
router.route("/user/register/admin").post(registerAdmin);
router.route("/user/login").post(login);
router.route("/user/all").get(all);
router.route("/user/me").get(isAuthenticated, me);
router.route("/user/id/:id").get(userById);
router
  .route("/user")
  .put(isAuthenticated, update)
  .delete(isAuthenticated, deleteUser);
router.route("/user/password/forgot").post(forgotPassword);
router.route("/user/password/change").put(isAuthenticated, changePassword);
router.route("/user/password/reset").put(resetPassword);

module.exports = router;
