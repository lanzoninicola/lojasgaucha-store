import { error } from "@utils/index"

/**
 * This function check if an object is not empty
 * @param {object} object
 */

export default function isNotEmptyObject(object) {
  if (Array.isArray(object)) {
    error(
      "isNotEmptyObject()",
      "Function requires an object as parameter instead of array"
    )
    return
  }

  if (object === "function") {
    error(
      "isNotEmptyObject()",
      "Function requires an object as parameter instead of array"
    )
    return
  }

  if (typeof object !== "object") {
    error(
      "isNotEmptyObject()",
      `Function requires an object as parameter instead of ${typeof object}`
    )
    return
  }

  if (Object.keys(object).length > 0) {
    return true
  }

  return false
}
