module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const obj ={};
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = turns / (turnsSpeed / 3600);
  obj.turns = turns;
  obj.seconds = seconds;
  return obj;
}