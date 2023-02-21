const express = require('express');
const router = express.Router();


router.route('/info').get((req,res) => {
    const db = req.db
    db.collection('topics').find().toArray((err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error fetching data from database');
        } else {
          res.json(data);
        }
      });
})


module.exports = router;