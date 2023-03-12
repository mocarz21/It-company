const express = require('express');
const router = express.Router();
const Topic = require('../models/info.model')
const Level = require('../models/level.model');


router.get('/info', async (req,res) => {

    try{
        res.json(await Topic.find().populate('Level.lv')) 
    }
    catch(err) {
        res.status(500).json({message: err})
    }
});

router.get('/info/:search', async (req, res) => { // Do sprawdzenia pisane z głowy bez sprawdzania
    const searchTerm = req.params.search;

    try{
        res.json(await Topic.find({ descryptionTwo: { $regex: searchTerm, $options: 'i' } }).populate('Level.lv'))
    }
    catch(err){
        res.status(500).json({message: err})
    }
})

router.post('/info' , async (req, res) => {
    const {id, title, description, descryptionTwo, lvl} = req.body

    try {
        const newTopic = new Topic({ id, title, description, descryptionTwo, lvl });
        await newTopic.save();
        res.json({ message: 'OK' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Błąd dodania' });
    }
    
})

router.put('/info/:id', async (req, res) => {
    const { title, description, descryptionTwo, lvl } = req.body;
    const { id } = req.params;
  
    try {
      const topic = await Topic.findOneAndUpdate(
        { id: id },
        { $set: { title, description, descryptionTwo, lvl } },
        { new: true }
      );
  
      res.json(topic);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Błąd edycji' });
    }
  });

  router.delete('/info/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedTopic = await Topic.findOneAndDelete({ id: id });
  
      if (!deletedTopic) {
        return res.status(404).json({ message: 'Nie znaleziono rekordu' });
      }
  
      res.json({ message: 'OK' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Błąd usuwania' });
    }
  });

module.exports = router;

