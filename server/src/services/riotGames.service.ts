const RIOT_GAMES_API_KEY = process.env.RIOT_GAMES_API_KEY;

export const fetchGameData = async (region: string, matchId: string) => {
    try {
        const GAME_DATA_URL = `https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${RIOT_GAMES_API_KEY}`

        const response = await fetch(GAME_DATA_URL);
        const gameData = await response.json();
        
        return gameData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchGamesList = async (region: string, puuid: string) => {
    try {
        const GAMES_LIST_URL = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${RIOT_GAMES_API_KEY}`

        const response = await fetch(GAMES_LIST_URL);
        const gamesList: string[] = await response.json();

        return gamesList;
    } catch (error) {
        console.log(error);
    }
}