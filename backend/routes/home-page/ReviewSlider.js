const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const Review = require("../../Schemas/home-page-schema/Review");

//reviews slider POST
// ASYNC -- allows other code to continue running without waiting for it to finish
// allows app to run smoothly without any freezes or lag
// async function - returns a promise that can be handled later
router.post("/ReviewsData", async (req, res) => {
  const Reviews = new Review({
    id: req.body.id,
    name: req.body.name,
    job: req.body.job,
    text: req.body.text,
  });
  console.log(Reviews);
  try {
    const savedPost = await Reviews.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
