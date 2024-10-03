const baseURL = "http://localhost:3000/scores";

async function getAllHighscores(){
    const res = await fetch(baseURL);
    const scores = await res.json();
    //console.log(scores)
    return scores;
}


async function addHighScore(newHighscore) {
    const options = {
        method: 'POST',
        body: JSON.stringify(newHighscore),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(baseURL, options);
    const data = await res.json();
    //console.log(data);
}







export {getAllHighscores, addHighScore};