const router = require('express').Router();
let Tether = require('../models/Tether');

router.route('/').get((req, res) => {
  Tether.find()
    .then(tether => res.json(tether))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const coin = req.body.coin;
  const symbol = req.body.symbol;
  const amount = Number(req.body.amount);
  const address = (req.body.address);

  const newTether = new Tether({
    coin,
    symbol,
    amount,
    address,
  });

  newTether.save()
  .then(() => res.json('Tether Transactions added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;