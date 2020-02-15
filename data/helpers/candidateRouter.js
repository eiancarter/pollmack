const express = require("express");
const Candidates = require("./candidateModel");
const router = express.Router();
const Contributions = require("./contributionModel");

//this one needs middleware to confirm project_id exists

//Posting a new project
router.post("/", validateCandidate, (req, res) => {
    Candidates.insert(req.body)
        .then(candidate => {
            res.status(201).json(candidate)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error posting candidate" })
        })
});

//adding an action to a project
router.post("/:id/contributions", (req, res) => {
    const contributionInfo = {...req.body, candidate_id: req.params.id };
    Candidates.insert(contributionInfo)
        .then(contribution => {
            res.status(201).json(contribution);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "error adding contribution to candidate"
            });
        });
});

router.get("/", (req, res) => {
    console.log("headers", req.headers);
    Candidates.get()
        .then(candidates => {
            res.status(200).json(candidates);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error retrieving candidates" })
        });
});

router.get("/:id", (req, res) => {
    Candidates.get(req.params.id)
        .then(candidate => {
            res.status(200).json(candidate);
        })
        .catch(error => {
            console.log(error);
        })
});

router.get("/:id/contributions", (req, res) => {
    Candidates.getProjectActions(req.params.id)
        .then(contributions => {
            res.status(200).json(contributions);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "error getting contributions from candidates"
            })
        })
})

router.delete("/:id", validateCandidateId, (req, res) => {
    Candidates.remove(req.params.id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: "the candidate has been deleted" });
            } else {
                res.status(404).json({ message: "candidate cannot be found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error removing candidate" })
        });
});

router.put("/:id", (req, res) => {
    const changes = req.body;
    Candidates.update(req.params.id, changes)
        .then(candidate => {
            res.status(200).json(candidate);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error updating candidate" })
        });
});

function validateCandidateId(req, res, next) {
    Candidates.get(req.params.id)
    .then(candidate => {
      if(candidate) {
        req.candidate = candidate;
        next();
      } else {
        res.status(400).json({ message: "invalid candidate id" });
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: "error retrieving candidate id" })
    })
}

function validateCandidate(req, res, next) {
    const body = req.body;
    if (body && body.name) {
      next();
    } else if (!body) {
      res.status(400).json({ message: "missing candidate data"})
    } else {
      res.status(400).json({ message: "missing name or description field"})
    }
  }
  


module.exports = router;