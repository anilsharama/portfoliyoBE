const express = require("express");
const router = express.Router();
const { sendContactMessage, getAllContacts } = require("../controllers/ContectController");



// POST contact form data
// contactRoutes.js
router.get("/", getAllContacts);  
router.post("/", sendContactMessage);


module.exports = router;
