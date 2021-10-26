const axios = require('axios');

module.exports = async () => {

    const { data } = await axios.get("https://www.freetogame.com/api/games?platform=pc");

    const games = data.slice(0, 100);

    const response = [];
    for (const game of games) {
        const { data } = await axios.get(`https://www.freetogame.com/api/game?id=${game.id}`);
        if(data.title.includes(":")) continue;
        response.push(data);
    }

    return response;
}