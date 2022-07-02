const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//AUTH ROUTES
router.use("/", require("./auth.routes"))

// USER ROUTES
// router.use("/", require("./user.routes"))

module.exports = router;



