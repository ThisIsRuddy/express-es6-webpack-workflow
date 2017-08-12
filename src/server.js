import express from 'express';

let app = express();

app.use('/', (req, res, next) => {
    console.log("Middleware working Okay!");
    next();
});

app.use('/sample', (req, res) => {
    res.send('This is a sample API response! Added ES7 Support!');
});

export default app;