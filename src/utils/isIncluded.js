/**
 * Check if a value passed to params is included inside an array passed as second parameter.
 * @param {string} value
 * @param {array} listItems
 */

import { arrayToString, isNotArray } from "./index"

function isIncluded(value, listItems) {
  if (isNotArray(listItems)) {
    console.error(
      `isIncluded() function - Second parameter must be an array instead of "${typeof listItems}"`
    )
    return
  }

  let filtered = listItems.filter(item => value === item)

  filtered = arrayToString(filtered)

  if (filtered === value) {
    return true
  }

  return false
}

export default isIncluded
