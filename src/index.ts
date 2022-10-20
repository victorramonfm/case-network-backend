import express, { Request, Response } from 'express'
import cors from 'cors'
import { Contributor } from './model/Contributor'
import { ContributorDatabase } from './database/ContributorDatabase'
import { contributorRouter } from './router/contributorRouter'

const app = express()
const port = 3003

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server is running in http://localhost:${process.env.PORT || 3003}`);
})

app.use("/contributors", contributorRouter)