var express = require('express');
var router = express.Router();
var persons = [
  { name: 'Alejandro', lastname: 'Hernández' },
  { name: 'Viktor', lastname: 'Zira' },
  { name: 'Eva', lastname: 'Vidal' }
];

router.route('/persons')
  .post(function(req, res) {
    res.json(persons);
  });

router.route('/persons/add')
  .post(function(req, res) {
    persons.push(req.body);
    res.json(persons);
  });

router.route('/persons/del')
  .post(function(req, res) {
    persons.splice(req.body.idx, 1);
    res.json(persons);
  });

router.route('/persons/edit')
  .post(function(req, res) {
    var idx = req.body.idx;
    delete req.body.idx;
    persons.splice(idx, 1, req.body);
    res.json(persons);
  });

module.exports = router;
