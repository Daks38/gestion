const  express = require('express')
require('./Database/mongo')
const cors = require('cors')
const router = require('./routes/taskRoutes')
require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json())
app.use("/tasks",router)

app.get("/", (req, res)=>{
    res.send("Tout fonctionne bien ici")
})
module.exports = app
// app.listen(process.env.PORT, ()=>console.log(`Vous êtes connecté sur http://localhost:${process.env.PORT}`))