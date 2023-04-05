const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post("/adduser", async (req, res) => {
  try {
    const userdata = await User(req.body).save();
    res.send(userdata);
  } catch (error) {
    res.send(error);
  }
});
router.get("/getuser", async (req, res) => {
  try {
    const userdata = await User.find();
    res.send(userdata);
  } catch (error) {
    res.send(error);
  }
});
router.get("/getbyid/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/deleteuser/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});
router.put("/update/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const userdata = await User.findByIdAndUpdate(_id, req.body);
    res.send(userdata);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
