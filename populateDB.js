const mongoose = require("mongoose");
const Post = require("./models/postModel");
require("dotenv").config();
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const messages = [
  {
    text: "Hey how you doing",
    user: "hunter2",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Im good, thanks for asking!",
    user: "Alice123",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Whats up?",
    user: "BobSmith",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Feeling great today!",
    user: "EmilyRose",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Hey, long time no see!",
    user: "Sara21",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Just chilling on a lazy Sunday.",
    user: "Mark87",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Whats your favorite hobby?",
    user: "LilyGreen",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Hows the weather over there?",
    user: "AlexWinter",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Working hard or hardly working?",
    user: "ChrisCoder",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Pizza or burgers for dinner?",
    user: "Foodie123",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Good morning!",
    user: "MorningPerson",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Just finished a great book! It's fantastic.",
    user: "Bookworm",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Excited for the weekend plans!",
    user: "WeekendWarrior",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Coding late into the night.",
    user: "NightCoder",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "What's your favorite movie genre?",
    user: "FilmBuff",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Reached a new fitness milestone today!",
    user: "FitnessFanatic",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Coffee or tea person?",
    user: "CaffeineLover",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Just adopted a new pet!",
    user: "PetLover",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Dreaming of a tropical vacation.",
    user: "TravelBug",
    added: new Date(new Date() - Math.random() * 1e12),
  },
  {
    text: "Learning a new language is challenging but fun!",
    user: "LanguageLearner",
    added: new Date(new Date() - Math.random() * 1e12),
  },
];

const users = [
  "6582e945bb1ed52d03c9b746",
  "6582fc2597b01e7b24ea10f0",
  "65848a257fffbddd01473e53",
  "65848a397fffbddd01473e5c",
  "65848a477fffbddd01473e65",
];

messages.forEach(async (el) => {
  const newPost = new Post({
    title: el.user,
    msg: el.text,
    author: users[Math.floor(Math.random() * 5)],
  });
  await newPost.save();
  console.log("added post");
});
