import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import posts from './routes/post.js'

const app = express()
app.use('/posts', posts)
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://reactmaster:reactmaster123@cluster0.sobwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))
