function displayHighscoreList(scores) {
    const highscoreList = document.querySelector('#highscorelist');
    highscoreList.innerText = '';

    
    for (const { name, score } of scores) {
        
        const updatedHighscoreList = document.createElement('li');
        updatedHighscoreList.textContent = `${name}, ${score}`;
        highscoreList.appendChild(updatedHighscoreList);
    }
}

export { displayHighscoreList };