const express = require('express');
const animalController = require('../../modules/animals/controllers');
const createAnimalSchema = require('../../modules/animals/validationSchemas/createAnimal');
const validate = require('../middlewares/validate');

const router = express.Router();

// router.get('/', (req,res) => {
//     res.json({message: 'Get animals'});
// });
router.get('/', animalController.getAnimals);
//-!!!-// router.get('/', animalController.getAnimals.bind(animalController));
// Или делаем стрелочные функции в class AnimalController 

// router.get('/:animalId', (req, res) => {
//     //const animalId = req.params.animalId;
//     const {animalId} = req.params;
//     res.json({message: `Get animal with id ${animalId}`});
// });
router.get('/:animalId', animalController.getAnimalById);

// router.post('/', (req,res) => {
//     res.json({message: 'Create animal'});
// });
router.post('/', validate(createAnimalSchema), animalController.createAnimal);


// router.put('/:animalId', (req,res) => {
//     const {animalId} = req.params;
//     res.json({message: `Update animal with id ${animalId}`});
// });
router.put('/:animalId', animalController.updateAnimal);

module.exports = router;