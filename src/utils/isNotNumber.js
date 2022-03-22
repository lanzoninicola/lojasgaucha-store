/**
 * Check if a value or values passed is/are not a string.
 * @param {any} args
 *
 */

function isNotNumber(...args) {
  const results = []

  args.forEach(arg => {
    if (typeof arg !== "number") {
      results.push(true)
    } else {
      results.push(false)
    }
  })

  return results.filter(result => result === false).length === 0
}

export default isNotNumber
