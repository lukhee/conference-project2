const router = require("express").Router()
const userController  = require("../controllers/user")

router.post("/speaker", userController.speaker)

router.post("/guest", userController.guest)

module.exports = router