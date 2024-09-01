import { fetchGamesList, fetchGameData } from "../services/riotGames.service";

export const resolvers = {
    Query: {
      game: async () => {
        return await fetchGameData("europe", "EUW1_7093359961");
      },
      matchList: async () => {
        return await fetchGamesList("europe", "2g78ngsPE2xqJF3Yn_9Ge-Q6DsKyiKenPi7IbWzB0sNeBDFucsZYqnEvP9oGBzG3AWRj0N3IWi1rCg");
      }
    },
  };