const router = require("express").Router();
const {
  getAll,
  getOne,
  create,
  update,
  deleteTestimonial,
} = require("../controllers/testimonial.controller");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");

router
  .route("/testimonial")
  .get(getAll)
  .post(isAuthenticated, isAuthorized("admin"), create);

router
  .route("/testimonial/:id")
  .get(getOne)
  .put(isAuthenticated, isAuthorized("admin"), update)
  .delete(isAuthenticated, isAuthorized("admin"), deleteTestimonial);

module.exports = router;
