import express from 'express'

let app = express();

app.use('/', (req, res, next) => {
    console.log("Middleware working Okay!")
    next()
})

app.use('/', (req, res) => res.send("Welcome, to the app! :)"))

app.listen(process.env.PORT || 3000, () => console.log(`API Served off port: ${process.env.PORT || 3000}`))

export { app }