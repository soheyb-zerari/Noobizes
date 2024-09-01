export const typeDefs = `#graphql
  type Game {
    metadata: MetaData!
    info: Info!
  }

  type MetaData {
    matchId: String!
  }

  type Info {
    gameDuration: Float!
    gameId: Float!
    participants: [Participant!]!
    teams: [Team!]!
  }

  type Challenge {
    baronTakedowns: Int!
    dragonTakedowns: Int!
    riftHeraldTakedowns: Int!
    turretTakedowns: Int!
    kda: Float!
  }

  type Participant {
    challenges: Challenge!
    champLevel: Int!
    championId: Int!
    championName: String!
    goldEarned: Int!
    item0: Int!
    item1: Int!
    item2: Int!
    item3: Int!
    item4: Int!
    item5: Int!
    item6: Int!
    kills: Int!
    lane: String!
    profileIcon: Int!
    puuid: String!
    riotIdGameName: String!
    riotIdTagline: String!
    totalDamageDealtToChampions: Int!
    totalDamageTaken: Int!
    wardsKilled: Int!
    wardsPlaced: Int!
    win: Boolean!
  }

  type Team {
    objectives: Objectives!
    teamId: Int!
    win: Boolean!
  }

  type Objectives {
    baron: ObjectiveDto!
    champion: ObjectiveDto!
    dragon: ObjectiveDto!
    inhibitor: ObjectiveDto!
    riftHerald: ObjectiveDto!
    tower: ObjectiveDto!
  }
  
  type ObjectiveDto {
    kills: Int!
  }
  
  type Query {
    game: Game
    matchList: [String!]!
  }
`;