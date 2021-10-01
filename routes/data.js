const { Router } = require("express");
const router = Router();
const { getData, postData } = require("../controller/data");

router.get("/getData", getData);
router.post("/postData", postData);

module.exports = router;
