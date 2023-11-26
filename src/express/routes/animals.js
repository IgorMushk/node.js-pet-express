const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({message: 'Get animals'});
});

router.get('/:animalId', (req, res) => {
    //const animalId = req.params.animalId;
    const {animalId} = req.params;
    res.json({message: `Get animal ${animalId}`});
});

router.post('/', (req,res) => {
    res.json({message: 'Create animal'});
});

router.put('/:animalId', (req,res) => {
    const {animalId} = req.params;
    res.json({message: `Update animal with id ${animalId}`});
});

module.exports = router;