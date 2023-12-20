module.exports = (req, res, next) => {
  if (res.isAuthenticated()) return next();
  res.redirect('/login');
};
