const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const isLoggedIn = require("../middleware/isLoggedIn");

const User = require("../models/userModel");
const Post = require("../models/postModel");
const passport = require("passport");

/* GET home page. */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const messages = await Post.find().sort({ added: -1 }).populate("author");
    res.render("index", { title: "Welcome", messages, user: req.user });
  }),
);

router.get("/newMessage", isLoggedIn, (req, res) => {
  if (req.user.role === "guest") return res.redirect("/upgrade?notMember");
  res.render("newMessage", { title: "New Message", user: req.user });
});

router.post(
  "/newMessage",
  body("title", "Title must be at least 3 characters long")
    .trim()
    .isLength({ min: 2 }),
  body("msg", "Message must be at least 3 characters long")
    .trim()
    .escape()
    .isLength({ min: 3 }),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const newPost = new Post({
      title: req.body.title,
      msg: req.body.msg,
      author: req.user.id,
    });
    if (!errors.isEmpty())
      return res.render("newMessage", {
        title: "New Message",
        user: req.user,
        post: newPost,
        err: errors.array(),
      });
    await newPost.save();
    res.redirect("/");
  }),
);

router.get("/login", (req, res) => {
  if (req.isAuthenticated()) return res.redirect("/");
  const err = req.session.messages;
  req.session.messages = [];
  res.render("login", { title: "Log In", err });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureMessage: true,
    failureRedirect: "/login",
  }),
);

router.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err);
    return res.redirect("/");
  });
});

router.get("/signUp", (req, res) => {
  if (req.isAuthenticated()) return res.redirect("/");
  res.render("signUp", { title: "Sign Up" });
});

router.post(
  "/signUp",
  body("name")
    .trim()
    .isAlphanumeric()
    .withMessage("Name must only contain letters and numbers")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("email", "Invalid Email").trim().isEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("passwordConfirm", "Passwords do not match").custom((val, { req }) => {
    return val === req.body.password;
  }),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    if (!errors.isEmpty())
      return res.render("signUp", {
        title: "Sign Up",
        user: newUser,
        err: errors.array(),
      });

    await newUser.save();
    req.login(newUser, (err) => {
      if (err) return next(err);
      return res.redirect("/?logged");
    });
  }),
);

router.get("/upgrade", isLoggedIn, (req, res) => {
  res.render("upgrade", { title: "Upgrade Account" });
});

router.post(
  "/upgrade",
  body("password", "Wrong password")
    .trim()
    .custom((val) => +val === 1234),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.render("upgrade", {
        title: "Upgrade Account",
        err: errors.array(),
      });
    await User.findByIdAndUpdate(req.user.id, { role: "member" });
    res.redirect("/newMessage");
  }),
);

router.get(
  "/delete/:id",
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    if (req.user.role !== "admin") return res.redirect("/");
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  }),
);

module.exports = router;
