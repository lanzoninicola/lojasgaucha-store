/**
 * Returns the value of a number rounded to the nearest integer..
 * @param {string} value
 */

function round(value) {
  if (Number.isNaN(Number(value * 1))) {
    return value;
  }

  const parsedValue = parseInt(value);
  return Math.round(parsedValue);
}

export default round;
