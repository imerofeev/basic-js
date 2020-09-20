module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let prev = 0, sum = 1;
  for (let i = 2; i <= disksNumber; ++i) {
    prev = i + sum;
    sum += prev;
  }
  return {
    turns: prev,
    seconds: Math.floor(prev * (60 * 60 / turnsSpeed))
  }
}