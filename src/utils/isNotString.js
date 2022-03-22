/**
 * Check if a value or values passed is/are not a string.
 * @param {string} args
 *
 */

function isNotString(...args) {
  const results = []

  args.forEach(arg => {
    if (typeof arg !== "string") {
      results.push(true)
    } else {
      results.push(false)
    }
  })

  return results.filter(result => result === false).length === 0
}

export default isNotString
