import fs from "fs/promises";

async function getAllHighscores(){
    const rawdata = await fs.readFile('./src/highscoreDB.json')
    return JSON.parse(rawdata);
}

async function addHighscore(name, score){ 
    const scoreList = await getAllHighscores();
    scoreList.push({name, score});

    const topHighscore = scoreList
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);


    await fs.writeFile('./src/highscoreDB.json', JSON.stringify(topHighscore, null, 2));
}

export {getAllHighscores, addHighscore};

