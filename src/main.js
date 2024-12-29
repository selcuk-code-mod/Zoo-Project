import { Ecosystem } from './Ecosystem.js';

const ecosystem = new Ecosystem();
const TOTAL_MOVES = 1000;

console.log('Initial population:');
console.log(ecosystem.getPopulationStats());

for (let i = 0; i < TOTAL_MOVES; i++) {
  ecosystem.simulate();
}

console.log('\nFinal population after 1000 moves:');
console.log(ecosystem.getPopulationStats());