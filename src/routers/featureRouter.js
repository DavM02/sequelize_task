import express from 'express';
import Feature from '../models/Feature.js';

const featureRouter = express.Router();

featureRouter.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const feature = await Feature.create({ name });
        res.status(201).json(feature); 
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default featureRouter;
