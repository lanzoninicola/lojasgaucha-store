/**
 * Check if a value or values passed is/are a string.
 * @param {any} args
 *
 */

function isNumber(...args) {
  const results = []

  args.forEach(arg => {
    if (typeof arg === "number") {
      results.push(true)
    } else {
      results.push(false)
    }
  })

  return results.filter(result => result === true).length === args.length
}

export default isNumber
