import express from "express";
import cors from "cors";
import * as db from './handledb.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000; 


app.get('/scores', async (req, res)=>{
    const scoreList = await db.getAllHighscores();
    res.json(scoreList);
})


app.post('/scores', async (req, res)=>{
    const {name, score} = req.body;
    await db.addHighscore(name, score);
    res.json({message: 'Saved'});
})



app.listen(PORT, ()=>{
    console.log('Listening on port', PORT);
})