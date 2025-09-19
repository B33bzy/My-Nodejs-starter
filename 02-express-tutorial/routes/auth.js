const express = require('express');
const router = express.Router();

router.post('/', (req, res)=> {
  const {name} = req.body;
  if(name){
    return res.status(200).send(`welcome ${name}`);
  }
  res.status().send('Please Provide credentials');
})

module.exports = router;