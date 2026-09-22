const express = require("express");
const router  = express.Router();



//Index-user
router.get("/", (req,res) => {
    res.send("GET for users");
});

//show-users
router.get("/:id", (req,res) => {
    res.send("GET for users");
});


//post-users
router.post("/", (req,res) => {
    res.send("POST for users");
});

//delete-users
router.delete("/:id", (req,res) => {
    res.send("DELETE for user id");
});

module.exports = router;