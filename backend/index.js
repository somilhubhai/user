const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const User = require("./model/user");
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/sample")
  .then(() => console.log("Db connected"));

app.post("/user/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    return res.json({ user });
  } catch (error) {
    console.error(error);
  }
});

app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      return res.json({ success: true, user });
    } else {
      return res.json({ success: false, message: "Invalid Email or password" });
    }
  } catch (error) {
    console.error(error)
  }
});

app.listen(PORT, () => console.log("server started at PORT 3000"));
