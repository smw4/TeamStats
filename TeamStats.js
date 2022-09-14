//TeamStats

//Declare a const variable called team
const team = {
	_players: [
		//populate the empty_players array with three players. Each player should be an object containing three properties: firstName, lastName, and age. Put each player on a new line to prevent the line from getting too long.
		{ firstName: 'Sean', lastName: 'Sean', age: 36 }, //player 1
		{ firstName: 'Linda', lastName: 'Groen', age: 33 }, //player 2
		{ firstName: 'Ron', lastName: 'Groen', age: 30 }, //player 3
	],
	_games: [
        { opponent: "Beagles", teamPoint: 42, opponentPoints: 45 },
        { opponent: "Beagles", teamPoint: 32, opponentPoints: 95 },
        { opponent: "Beagles", teamPoint: 24, opponentPoints: 5 },
    ],
};

console.log(team._players);
console.log(team._games);



get players() { // STEP 5. Not sure this is correct!
    return _players;
}