/**
 * Convert a string to arrat based on separator as input.
 * @param {string} value
 * @param {string} separator
 */

function stringToArray(value, separator = "") {
  if (typeof value !== "string") {
    console.error(
      `stringToArray() function - First parameter must be a string instead of "${typeof value}"`
    )
  }

  if (typeof separator !== "string") {
    console.error(
      `stringToArray() function - Second parameter must be a string instead of "${typeof separator}"`
    )
  }

  if (separator === "" || separator === undefined) {
    separator = " "
  }

  return value.split(separator)
}

export default stringToArray
