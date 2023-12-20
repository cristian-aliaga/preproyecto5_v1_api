require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes/index')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))
app.use(express.json())

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connected to MongoDB");
});

app.use('/v1', routes)

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto ' + process.env.PORT)
})
