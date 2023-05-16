const express = require('express');
const router = express.Router();

// import the model
const Form = require('../models/Form');

router.post('/submitForm', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(200).send({ message: "Form data saved successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: "Error saving form data" });
  }
});

module.exports = router;
