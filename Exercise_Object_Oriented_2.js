// Team Stats

// We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the
//JavaScript data structures at your disposal: arrays, objects, etc. Once created, you can manipulate these data structures as well as gain insights from them. For example, 
//you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
  _players:[{firstName: 'Pablo',lastName: 'Sanchez',age:11},{firstName: 'Sergio',lastName:'Gonzalez',age:14},{firstName:'Juan',lastName:'Oviedo',age:13}],
  _games:[{opponent:'Broncos',teamPoints:42,opponentPoints:27},{opponent:'Toronto',teamPoints:38,opponentPoints:33},{opponent:'Florida',teamPoints:44,opponentPoints:42}],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    const player = {
      firstName:firstName,
      lastName:lastName,
      age:age
    };
    this._players.push(player);
  },
  addGames(opponent,teamPoints,opponentPoints){
    const game = {
      opponent:opponent,
      teamPoints:teamPoints,
      opponentPoints:opponentPoints
    };
    this._games.push(game)
  }
}

team.addPlayer('Steph','Curry','28')
team.addPlayer('Lisa','LeSlie','44')
team.addPlayer('Bugs','Bunny','76')

console.log(team.players)
console.log(team.games)

team.addGames('LA','45','54')
console.log(team.games)

