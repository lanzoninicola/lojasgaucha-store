/**
 * Check if a value passed to params is NOT included inside an array passed as second parameter.
 * @param {string} value
 * @param {array} listItems
 */

import { isNotArray } from "./index"

function isNotIncluded(value, listItems) {
  if (isNotArray(listItems)) {
    console.error(
      `isNotIncluded() function - Second parameter must be an array instead of "${typeof listItems}"`
    )
    return
  }

  let filtered = listItems.filter(item => value === item)

  if (filtered.length === 0) {
    return true
  }

  return false
}

export default isNotIncluded
