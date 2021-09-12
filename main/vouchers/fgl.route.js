//
// author: Maha Waris Khan & Shayan M Hussain 


const router = require("express").Router();
let Voucher = require("./fgl.model");
const bodyParser = require("body-parser").json();

// GET REQUESTS
router.route("/company/:id/:type").get(bodyParser, (req, res) => {
  Voucher.find({
    company: req.params.id,
    type: req.params.type,
  })
    .populate(["company", "creator"])
    .then((voucher) => res.json(voucher))
    .catch((err) => res.json("Error: " + err));
});


//GETTING INVOICE BY ID
router.route("/specific/:id").get(bodyParser, (req, res) => {
  Voucher.findById(req.params.id)
    .populate(["company", "creator"])
    .then((voucher) => res.json(voucher))
    .catch((err) => res.json("error"));
});


// GETTING INVOICE NUMBER
router.route("/invoice/:id/:type").get(bodyParser, (req, res) => {
  Voucher.find({ company: req.params.id, type: req.params.type }, {}, { sort: { _id: -1 }, limit: 1 })
    .populate(["company", "creator"])
    .then((voucher) => res.json(voucher))
    .catch((err) => res.json(err));
});



// POST REQUEST
router.route("/").post(bodyParser, (req, res) => {
  const voucher = new Voucher(req.body);

  voucher
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.json(err));
});


router.route("/:id").post(bodyParser, (req, res) => {
  Voucher.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json("Updated"))
    .catch((err) => res.json(err));
});

module.exports = router;
