const router = require("express").Router()
const {
  add,
  all,
  toggleRtl,
  byCode,
  byId,
  deleteLanguage,
  updateContent,
  updateNameCode,
  addColumn,
  removeColumn,
  updateAll,
  allByQuery,
} = require("../controllers/language.controller")
const { isAuthenticated, isAuthorized } = require("../middleware/auth")

// router.route("/language/column").post(addColumn).delete(removeColumn)
// router.route("/language/all").put(updateAll)
router.route("/language/column").post(isAuthenticated, isAuthorized("admin"), addColumn)
router.route("/language/column").delete(isAuthenticated, isAuthorized("admin"), removeColumn)
router.route("/language/all").put(isAuthenticated, isAuthorized("admin"), updateAll)

router.route("/language").get(all)
router.route("/language/all").get(allByQuery)
router.route("/language/:code").get(byCode)
router.route("/language/id/:id").get(byId)
router.route("/language").post(isAuthenticated, isAuthorized("admin"), add)
router
  .route("/language/toggle")
  .put(isAuthenticated, isAuthorized("admin"), toggleRtl)
router
  .route("/language/name")
  .put(isAuthenticated, isAuthorized("admin"), updateNameCode)
router
  .route("/language/content")
  .put(isAuthenticated, isAuthorized("admin"), updateContent)

router
  .route("/language/:id")
  .delete(isAuthenticated, isAuthorized("admin"), deleteLanguage)

module.exports = router
