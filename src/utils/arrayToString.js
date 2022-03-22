/**
 * Convert an array to string based on separator as input.
 * @param {string} array
 * @param {string} separator
 */

function arrayToString(array, separator = "") {
  if (!Array.isArray(array)) {
    console.error(
      `arrayToString() function - First parameter must be an array instead of "${typeof array}"`
    )
  }

  if (typeof separator !== "string") {
    console.error(
      `arrayToString() function - Second parameter must be a string instead of "${typeof separator}"`
    )
  }

  if (separator === "" || separator === undefined) {
    separator = " "
  }

  return array.join(separator)
}

export default arrayToString
