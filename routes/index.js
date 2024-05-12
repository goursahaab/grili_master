var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home page' });
});

/* get menus page */
router.get('/menus', function(req, res, next) {
  res.render('menus', { title: 'menus page' });
});

/* get about page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

/* get our chefs page */
router.get('/chefs', function(req, res, next) {
  res.render('chefs', { title: 'our chefs' });
});

/* get contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

/* get cofy drink menus page */
router.get('/drink', function(req, res, next) {
  res.render('drink', { title: 'drink' });
});


module.exports = router;
