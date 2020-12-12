var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('songs', { title: 'Rashmi Dahal' });
});

router.get('/privateinvestigations', (req, res) => {
  res.render('privateinvestigations', {title:'Private Investigations!'});
});

router.get('/loveovergold', (req, res) => {
  res.render('loveovergold', {title:'Love Over Gold!'});
});

module.exports = router;