import express from "express";
import cors from "cors";
//db
import db from "./database/db.js";
//rutas
import blogRoutes from './routes/routes.js'
import router from './routes/routes.js'

const app=express()

app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)
app.use('/blogs',router)

try {
  await db.authenticate 
  console.log('Conexion a la db')
} catch (error) {
  console.log(`El error ocurrio aca: ${error}`)
}


app.get("/", (req, res) => res.send("chupala!"));
export default app 