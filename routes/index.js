const express = require("express");
const moment = require("moment");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const isLoggedIn = require("../middleware/isLoggedIn");

const User = require("../models/userModel");
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome", messages, user: req.user });
});

router.get("/newMessage", isLoggedIn, (req, res) => {
  res.render("newMessage", { title: "New Message" });
});

router.post("/new", (req, res) => {
  messages.unshift({
    text: req.body.msg,
    user: req.body.username,
    added: moment().format("ddd, MMM Do YYYY (hh:mm)"),
  });
  res.redirect("/");
});

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

const messages = [
  {
    text: "Hey how you doing",
    user: "hunter2",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Im good, thanks for asking!",
    user: "Alice123",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Whats up?",
    user: "BobSmith",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Feeling great today!",
    user: "EmilyRose",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Hey, long time no see!",
    user: "Sara21",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Just chilling on a lazy Sunday.",
    user: "Mark87",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Whats your favorite hobby?",
    user: "LilyGreen",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Hows the weather over there?",
    user: "AlexWinter",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Working hard or hardly working?",
    user: "ChrisCoder",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Pizza or burgers for dinner?",
    user: "Foodie123",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Good morning!",
    user: "MorningPerson",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Just finished a great book! It's fantastic.",
    user: "Bookworm",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Excited for the weekend plans!",
    user: "WeekendWarrior",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Coding late into the night.",
    user: "NightCoder",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "What's your favorite movie genre?",
    user: "FilmBuff",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Reached a new fitness milestone today!",
    user: "FitnessFanatic",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Coffee or tea person?",
    user: "CaffeineLover",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Just adopted a new pet!",
    user: "PetLover",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Dreaming of a tropical vacation.",
    user: "TravelBug",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
  {
    text: "Learning a new language is challenging but fun!",
    user: "LanguageLearner",
    added: moment(new Date(new Date() - Math.random() * 1e12)).format(
      "ddd, MMM Do YYYY (hh:mm)",
    ),
  },
];
module.exports = router;
