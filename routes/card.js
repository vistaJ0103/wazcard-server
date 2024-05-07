const router = require("express").Router()
const {
  create,
  all,
  cardByTitle,
  deleteCard,
  updateSettings,
  updateHour,
  addGallery,
  updateGallery,
  deleteGallery,
  changeFloatingIcon,
  changeNumber,
  changeFloatingBg,
  addReview,
  deleteReview,
  updateReview,
  addIcon,
  updateIcon,
  updateIconValue,
  deleteIcon,
  updateBackgroundColor,
  updateBusinessName,
  updateBusinessSlogan,
  updateCardBusinessCoverPhoto,
  updateCardBusinessLogo,
  updateCoverColor,
  updateTextColor,
  updateHoursColor,
  updateReviewColor,
  swapIconPriority,
  swapGalleryPriority,
  byUserId,
  reviewsByUserId,
  updateReviewStatus,
  cardByTitlePublic,
  cardLike,
  updateCardBgImage,
  updateLanguage,
  allAdminCards,
  allUserCards,
  reviewsAll,
  updateCardView,
    getCardViewByCountryCount
} = require("../controllers/card.controller")
const { isAuthenticated } = require("../middleware/auth")

router.route("/card/all").get(all)
router.route("/card/all/admin").get(allAdminCards)
router.route("/card/all/user").get(allUserCards)
router.route("/card/all/uid").get(isAuthenticated, byUserId)
router.route("/card/:title").get(isAuthenticated, cardByTitle)
router.route("/card/public/:title").get(cardByTitlePublic)
router.route("/card/review/uid").get(isAuthenticated, reviewsByUserId)
router.route("/card/review/all").get(reviewsAll)
router.route("/card/view/country/count/:title").get(getCardViewByCountryCount)

router.route("/card").post(isAuthenticated, create)
router.route("/card/gallery").post(isAuthenticated, addGallery)
router.route("/card/review").post(addReview)
router.route("/card/icon").post(isAuthenticated, addIcon)

router.route("/card/gallery/sort").put(isAuthenticated, swapGalleryPriority)
router.route("/card/icon/sort").put(isAuthenticated, swapIconPriority)
router.route("/card/settings").put(isAuthenticated, updateSettings)
router.route("/card/hours").put(isAuthenticated, updateHour)
router.route("/card/gallery").put(isAuthenticated, updateGallery)
router.route("/card/floating-icon").put(isAuthenticated, changeFloatingIcon)
router.route("/card/number").put(isAuthenticated, changeNumber)
router.route("/card/floating-bg").put(isAuthenticated, changeFloatingBg)
router.route("/card/review").put(isAuthenticated, updateReview)
router.route("/card/review/status/:id").put(isAuthenticated, updateReviewStatus)
router.route("/card/icon").put(isAuthenticated, updateIcon)
router.route("/card/icon-value").put(isAuthenticated, updateIconValue)
router.route("/card/logo").put(isAuthenticated, updateCardBusinessLogo)
router.route("/card/bg-image").put(isAuthenticated, updateCardBgImage)
router
  .route("/card/cover-photo")
  .put(isAuthenticated, updateCardBusinessCoverPhoto)
router.route("/card/title").put(isAuthenticated, updateBusinessName)
router.route("/card/slogan").put(isAuthenticated, updateBusinessSlogan)
router.route("/card/text-color").put(isAuthenticated, updateTextColor)
router.route("/card/bg-color").put(isAuthenticated, updateBackgroundColor)
router.route("/card/cover-color").put(isAuthenticated, updateCoverColor)
router.route("/card/hours-color").put(isAuthenticated, updateHoursColor)
router.route("/card/review-color").put(isAuthenticated, updateReviewColor)
router.route("/card/language").put(isAuthenticated, updateLanguage)
router.route("/card/update/view/:title").put(updateCardView)
router.route("/card/like").put(cardLike)

router.route("/card/:id").delete(isAuthenticated, deleteCard)
router.route("/card/gallery/:id").delete(isAuthenticated, deleteGallery)
router.route("/card/review/:id").delete(isAuthenticated, deleteReview)
router.route("/card/icon/:id").delete(isAuthenticated, deleteIcon)

module.exports = router
