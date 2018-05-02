export function getRandomWholeNumber(end = 1000, start = 0) {
  return Math.floor((Math.random() * end) + start);
}