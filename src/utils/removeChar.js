/**
 * Remove chars from a string based on direction.
 * @param {string} string
 * @param {object} options
 */

function removeChar(string, { charsN = 0, direction = "left" }) {
  if (typeof string !== "string") {
    console.error(
      `removeChar() function - First parameter must be a string instead of "${typeof string}"`
    )
  }

  if (direction === "left") {
    return string.substring(charsN, string.length)
  }

  if (direction === "right") {
    return string.substring(0, string.length - charsN)
  }

  return string
}

export default removeChar
