const Animal = require("../models/animal");
const animalRepository = require("../repositories/animalsREpository");

class AnimalsService {
    constructor(animalRepositoty) {
        this.animalRepositoty = animalRepositoty;
    }

    // описываем интерфейс
    async getAll() {
       // a lot of logic 
       return await this.animalRepositoty.findAll();
    }

    async getOneById(id) {
        return await this.animalRepositoty.findOneById(id);
    }

    async create(payload) {
        const animal = new Animal(payload);
        return await this.animalRepositoty.create(animal);
    }
    
    updateById(id, payload) {}

    // remove || delete - сделать самостоятельно
}

const animalsService = new AnimalsService(animalRepository);

module.exports = animalsService;
// бизнесс логика