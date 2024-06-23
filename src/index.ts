import express, { Request, Response} from 'express'
import { generateFakerUser } from './generateFakerUser'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/v1/fakeUser', (req:  Request, res: Response)=>{
    const fakeUser = generateFakerUser()
    res.status(200).send(fakeUser)
    return
})

app.listen(3000, ()=> {
    console.log('🚀 server is listening on port 3000 v1');
})