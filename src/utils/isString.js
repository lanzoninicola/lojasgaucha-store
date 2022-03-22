/**
 * Check if a value or values passed is/are a string.
 * @param {string} args
 *
 */

function isString(...args) {
  const results = []

  args.forEach(arg => {
    if (typeof arg === "string") {
      results.push(true)
    } else {
      results.push(false)
    }
  })

  return results.filter(result => result === true).length === args.length
}

export default isString
