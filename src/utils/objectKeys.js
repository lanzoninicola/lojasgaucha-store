/**
 * Remove an array of object keys
 * @param {object} obj
 */

import { isObject, error } from "@utils"

export default function objectKeys(obj = {}) {
  if (!isObject(obj)) {
    error(
      `objectKeys()`,
      `Function parameter must be an object, instead of: ${typeof obj}`
    )
    return
  }

  return Object.keys(obj).map(prop => prop)
}
