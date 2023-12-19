require('dotenv').config()
const mercadopago = require("mercadopago")
const { update } = require('./src/models/Product.model')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes/index')
const app = express()
const cors = require('cors')

mercadopago.configure({
    access_token: "TEST-8003479140000251-121721-b666f0691b81ac45462c970ac9b315fd-1596855217"
})

app.post("/mercadopago", async (req, res) => {
    const preference = req.body
    const responseMP = await mercadopago.preferences.create(preference)
    console.log(responseMP)
    res.json({
        checkoutId: responseMP.body.id
    });

})

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
