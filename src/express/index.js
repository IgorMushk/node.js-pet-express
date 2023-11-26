const express = require('express');
const { nanoid }  = require('nanoid');

// const Router = express.Router;
// const router = Router();
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

const app = express();

app.use((req,res,next) => {
    const id = nanoid();
    req.id = id;
    //res.send('qwerty');
    next();
    //next(id);
});

app.use('/animals',  router);

app.get('/health', (req,res) => {
//app.use('/health', (req,res) => {
    //res.send('Server is running');
    //console.log(req.id);
    res.setHeader('x-request-id',req.id);
    res.json({status:  200,  message: 'Server is running'});
});

app.use((err, req, res, next)=>{
    //console.log('error', err);
    res.status(500).json({status: 500, message: "Something went wrong", err });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
