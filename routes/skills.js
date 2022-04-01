var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id/edit', skillController.edit);

router.get('/new', skillController.new);

roouter.get('')






module.exports = router;
