const fs = require('fs');
const parseGames = require('../a/fn/parseGames.js');
const collapseGames = require('./fn/collapseGames.js');
const multiply = require('../../utils/multiply');
const sum = require('../../utils/sum.js');

const input = fs.readFileSync('./input.txt', 'utf-8');

const games = parseGames(input);
const collapsedGames = collapseGames(games);

const gameSum = collapsedGames
	.map(collapsedGame => Object.values(collapsedGame).reduce(multiply, 1))
	.reduce(sum, 0);

console.warn(gameSum);