const router = require('express').Router();
let Ethereum = require('../models/Ethereum');

router.route('/').get((req, res) => {
  Ethereum.find()
    .then(ethereum => res.json(ethereum))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const deposit = req.body.deposit;
  const symbol = req.body.symbol;
  const amount = Number(req.body.amount);
  const address = (req.body.address);

  const newEthereum = new Ethereum({
    deposit,
    symbol,
    amount,
    address,
  });

  newEthereum.save()
  .then(() => res.json('Ethereum Transactions added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Ethereum.findById(req.params.id)
    .then(ethereum => {
      ethereum.deposit = req.body.deposit;
      ethereum.symbol = req.body.symbol;
      ethereum.amount = Number(req.body.amount);
      ethereum.address = req.body.address;

      ethereum.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
