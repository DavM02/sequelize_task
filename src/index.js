import express from 'express';
import ratingRouter from './routers/ratingRouter.js';
import carRouter from './routers/carRouter.js';
import dealershipRouter from './routers/dealershipRouter.js';
import userRouter from './routers/userRouter.js';
import featureRouter from './routers/featureRouter.js'
import './models/index.js';
import sequelize from './config/db.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/rating', ratingRouter);
app.use('/api/cars', carRouter);
app.use('/api/dealerships', dealershipRouter);
app.use('/api/users', userRouter);
app.use('/api/features', featureRouter);


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    console.error('Error:', err); 
    res.status(status).json({
        message,
        stack: err.stack,
    });
});


const run = async () => {
    try {
        await sequelize.query("SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))");
        
        await sequelize.sync({
            force: true,
            // force: false,
            alter: false,
        })

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};

run();  