const router = require("express").Router();
const mainController = require("../controllers/bandController");
router.get("/", mainController.index);
router.get("/bands/:id", mainController.getById);
router.get("/genders", mainController.showGenders);
router.get("/genders/:gen", mainController.getByGender);

module.exports = router;
