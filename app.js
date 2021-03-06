require('dotenv').config()
require('./src/utils/database')
const cors = require("cors");


const express = require('express')
const bodyParser = require('body-parser')
const {validateToken}=require('./src/middleware/index')
const router=require('./src/v1/routes/index')
const app = express()
app.use(
	cors({
		origin: "*",
		credentials: true,
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
	})
);

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(validateToken)
app.get('/', (req, res, next) => {
  res.send(' route check server')
})



app.use('/v1', router)
app.listen(process.env.PORT || 5000, () =>
  console.log('connected to server server'),
)
