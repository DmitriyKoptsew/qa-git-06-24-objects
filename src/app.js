function getScore(scores) {
    let totalScore = 0;
    for (let key in scores) {
        totalScore += scores[key];
    }
    return totalScore;
}

const scores = {
    Anna: 10,
    Olga: 20,
    Ivan: 15,
};

console.log(getScore(scores));