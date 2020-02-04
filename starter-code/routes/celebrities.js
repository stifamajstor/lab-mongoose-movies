const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

//dispaly all celebs
router.get("/celebrities/index", (req, res, next) => {
  Celebrity.find()
    .then(celebDocs => {
      res.render("celebrities/index.hbs", { celebList: celebDocs });
    })
    .catch(err => {
      next(err);
    });
});

//display a form
router.get("/celebrities/newCeleb", (req, res, next) => {
  res.render("./celebrities/new.hbs");
});

//display single celeb
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      //   res.send(celeb);
      res.render("celebrities/show.hbs", celeb);
    })
    .catch(err => {
      next(err);
    });
});

//create a celebrity
router.post("/celebrities", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(createdCeleb => {
      res.redirect("/celebrities/index");
    })
    .catch(err => {
      res.redirect("/celebrities/newCeleb");
    });
});

//delete a celeb
router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/celebrities/index");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
