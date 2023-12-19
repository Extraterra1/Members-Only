const express = require('express');
const moment = require('moment');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res) => {
  res.render('new', { title: 'New Message | Mini Message Board' });
});

router.post('/new', (req, res) => {
  messages.unshift({
    text: req.body.msg,
    user: req.body.username,
    added: moment().format('ddd, MMM Do YYYY (hh:mm)')
  });
  res.redirect('/');
});

const messages = [
  {
    text: 'Hey how you doing',
    user: 'hunter2',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Im good, thanks for asking!',
    user: 'Alice123',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Whats up?',
    user: 'BobSmith',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Feeling great today!',
    user: 'EmilyRose',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Hey, long time no see!',
    user: 'Sara21',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Just chilling on a lazy Sunday.',
    user: 'Mark87',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Whats your favorite hobby?',
    user: 'LilyGreen',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Hows the weather over there?',
    user: 'AlexWinter',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Working hard or hardly working?',
    user: 'ChrisCoder',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Pizza or burgers for dinner?',
    user: 'Foodie123',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Good morning!',
    user: 'MorningPerson',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: "Just finished a great book! It's fantastic.",
    user: 'Bookworm',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Excited for the weekend plans!',
    user: 'WeekendWarrior',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Coding late into the night.',
    user: 'NightCoder',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: "What's your favorite movie genre?",
    user: 'FilmBuff',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Reached a new fitness milestone today!',
    user: 'FitnessFanatic',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Coffee or tea person?',
    user: 'CaffeineLover',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Just adopted a new pet!',
    user: 'PetLover',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Dreaming of a tropical vacation.',
    user: 'TravelBug',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  },
  {
    text: 'Learning a new language is challenging but fun!',
    user: 'LanguageLearner',
    added: moment(new Date(new Date() - Math.random() * 1e12)).format('ddd, MMM Do YYYY (hh:mm)')
  }
];
module.exports = router;
