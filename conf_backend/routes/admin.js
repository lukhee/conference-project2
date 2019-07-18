const router = require("express").Router()
const adminController = require("../controllers/admin")

router.get("/", adminController.viewAll)
router.put('/:ID', adminController.guestToSpeaker)
router.delete('/:ID', adminController.removeSpeaker)

module.exports = router