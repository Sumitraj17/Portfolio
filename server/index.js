import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { config } from 'dotenv'
import router from './Routes/router.js'
import cors from 'cors'
config()

const __filepath = fileURLToPath(import.meta.url)
const __dirname = dirname(__filepath)

const app = express()
const port = process.env.PORT || 3000
const allowedOrigins = ['https://sumitraj-portfolio.netlify.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['POST'],
  credentials: true,
}));
app.use(express.json())  //middleware to parse Json

app.use('/v1',router)
app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`)
})