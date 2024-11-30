const router = require("express").Router();
const heroController = require("../controllers/heroController");

router.get("/", heroController.index);
router.get("/detail/:id", heroController.detail);
router.get("/bio/:id/:ok?", heroController.bio);

module.exports = router;
