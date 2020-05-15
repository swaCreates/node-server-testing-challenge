const express= require('express');
const db= require('./character-module.js');

const router= express.Router();

router.get('/', async (req, res, next) => {
    try {
        const chars= await db.fetch();
        res.json(chars);
    } catch (err) {
        console.log('Fetch all:', err);
        next(err);
    };
});

router.get('/:id', async (req, res, next) => {
    try {
        const char= await db.fetchById(req.params.id);
        if(!char){
            return res.status(404).json({
                message: 'Character was not found'
            });
        }
        res.json(char);
    } catch (err) {
        console.log('Fetch by id:', err);
        next(err);
    };
});

router.post('/', async (req, res, next) => {
    try {
        if(!req.body){
            return res.status(400).json({
                message: 'Must have a Character',
            });
        } else if(!req.body.name){
            return res.status(400).json({
                message: 'Must have a name',
            });
        } else if(!req.body.department){
            return res.status(400).json({
                message: 'Must have a department',
            });
        };
        const [ id ]= await db.create(req.body);
        const newChar= await db.fetchById(id);
        res.status(201).json(newChar);
    } catch (err) {
        console.log('Create char:', err);
        next(err);
    };
});

router.delete('/:id', async (req, res, next) => {
    try {
        await db.destroy(req.params.id);
        res.status(204).end();
    } catch (err) {
        console.log('Deleted Char:', err);
        next(err);
    };
});

module.exports= router;