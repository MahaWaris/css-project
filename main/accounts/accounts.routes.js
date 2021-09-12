//
// author: Maha Waris Khan & Shayan M Hussain 



const router = require("express").Router();
let Group = require("../components/accountGroup/accountGroup.model");
let Account = require("./accounts.model");
const bodyParser = require("body-parser").json();

//GET REQUESTS
router.route("/company/:id").get(bodyParser, (req, res) => {
  Account.find({
    company: req.params.id,
  })
    .populate([
      "company",

    ])
    .then((account) => res.json(account))
    .catch((err) => res.json("Error: " + err));
});

router.route("/:id").get(bodyParser, (req, res) => {
  Account.findById(req.params.id)
    .populate([
      "company",

    ])
    .then((account) => res.json(account))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST REQUESTS
router.route("/").post(bodyParser, (req, res) => {

  Account.find({
    company: req.body.company[0],
    group: req.body.group
  }).sort({ createdAt: -1 }).limit(1)
    .populate([
      "company"
    ])
    .then((element) => {
      let code = 0;
      if (element.length === 0) {
        code = req.body.code + "01"
      } else {
        code = parseInt(element[0].code) + 1;

      }
      const account = new Account({
        company: req.body.company,
        code: code,
        type: req.body.type,
        class: req.body.class,
        group: req.body.group,
        name: req.body.name,
        statement: req.body.statement,
        description: req.body.description

      }
      );
      account
        .save()
        .then(() => res.json("Added"))
        .catch(() => console.log("Account error"));
    })
    .catch(() => res.json("error"));

});

router.route("/:id").post(bodyParser, (req, res) => {
  Account.findByIdAndUpdate(req.params.id, req.body)
    .populate("company")
    .then(() => res.json("Added"))
    .catch(() => res.status(400).json("error"));
});

module.exports = router;
