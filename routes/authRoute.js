const express = require('express')

const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController.js");
  const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");
  
  //router object
  const router = express.Router();
  
  //routing
  //REGISTER || Method POST
  router.post("/register", registerController); //Since MVC pattern
  
  //LOGIN || POST
  router.post("/login", loginController);
  
  //test routes
  router.get("/test", requireSignIn, isAdmin, testController);


  // export default router;
  module.exports = router;