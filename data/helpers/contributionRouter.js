const express = require("express");
const Contributions = require("./contributionModel");
const router = express.Router();

router.get("/", (req, res) => {
    Contributions.get()
        .then(contributions => {
            res.status(200).json(contributions)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "error retrieving contributions" })
        })
});

router.get("/:id", (req, res) => {
    Contributions.get(req.params.id)
        .then(contribution => {
            if(contribution) {
                res.status(200).json(contribution);
            } else {
                res.status(404).json({ message: "contribution not found" })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "error retrieving that contribution"
            })
        })
});

router.post('/:id', (req, res) => {
    const newContribution = req.body;
    contributions.insert(newContribution)
      .then(() => res.status(201))
      .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
    Contributions.remove(req.params.id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: "contribution deleted" })
            } else {
                res.status(404).json({ message: "cannot delete contribution" })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error deleting" })
        })
});

router.put("/:id", (req, res) => {
    const changes = req.body;
    Contributions.update(req.params.id, changes)
        .then(contribution => {
            if(contribution) {
                res.status(200).json(action);
            } else {
                res.status(404).json({ message: "the contribution cannot be changed" })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error updating" })
        });
});


module.exports = router;