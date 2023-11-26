class AnimalController {
    getAnimalById(req, res) {
        const {animalId} = req.params;
        res.json({message: `Get animal with id ${animalId}`});
    }

    getAnimals(req,res)  {
        res.json({message: 'Get animals'});
    }

    createAnimal(req,res) {
        res.json({message: 'Create animal'});
    }

    updateAnimal(req,res) {
        const {animalId} = req.params;
        res.json({message: `Update animal with id ${animalId}`});
    }
}

const animalController = new AnimalController;

module.exports = animalController;