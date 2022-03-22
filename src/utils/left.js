/**
 * Get the leftest char of value based on char numbers.
 * @param {value} value
 * @param {int} char
 */

function left(value, char = 0) {
  if (typeof char !== "number") {
    console.error(
      `left() function - Second parameter must be a number instead of "${typeof strcharing}"`
    )
    return value
  }

  if (char === 0) {
    console.error(
      `left() function - You don't have specified the number of char."`
    )
    return value
  }

  if (typeof value === "string") {
    const strLength = value.length

    if (char > strLength) {
      console.error(
        `You are attempting to remove more char than the length of value. The "${value}" is length ${strLength}"`
      )
    }

    return value.slice(0, char)
  }

  return value
}

export default left
