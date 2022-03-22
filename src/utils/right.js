/**
 * Get the rightest char of value based on char numbers.
 * @param {value} value
 * @param {int} char
 */

function right(value, char = 0) {
  if (typeof char !== "number") {
    console.error(
      `right() function - Second parameter must be a number instead of "${typeof char}"`
    )
  }

  if (char === 0) {
    console.error(
      `right() function - You don't have specified the number of char."`
    )
  }

  if (typeof value === "string") {
    const strLength = value.length

    if (char > strLength) {
      return new Error(
        `You are attempting to remove more char than the length of value. The "${value}" is length ${strLength}"`
      )
    }

    return value.slice(-char, strLength)
  }

  return value
}

export default right
