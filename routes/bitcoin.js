const router = require('express').Router();
let Bitcoin = require('../models/Bitcoin');

router.route('/').get((req, res) => {
  Bitcoin.find()
    .then(bitcoin => res.json(bitcoin))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const deposit = req.body.deposit;
  const amount = Number(req.body.amount);
  const withdraw = req.body.withdraw;
  const network = req.body.network;
  const address = (req.body.address);

  const newBitcoin = new Bitcoin({
    deposit,
    amount,
    withdraw,
    network,
    address,
  });

  newBitcoin.save()
  .then(() => res.json('Bitcoin added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Bitcoin.findById(req.params.id)
    .then(bitcoin => {
      bitcoin.deposit = req.body.deposit;
      bitcoin.amount = Number(req.body.amount);
      bitcoin.withdraw = req.body.withdraw;
      bitcoin.network = req.body.network;
      bitcoin.address = req.body.address;

      bitcoin.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
