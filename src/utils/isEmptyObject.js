import { error } from "@utils/index"

/**
 * This function check if an object has props or not
 * @param {object} object
 */

export default function isEmptyObject(object) {
  if (Array.isArray(object)) {
    error(
      "isEmptyObject()",
      "Function requires an object as parameter instead of array"
    )
    return
  }

  if (object === "function") {
    error(
      "isEmptyObject()",
      "Function requires an object as parameter instead of array"
    )
    return
  }

  if (typeof object !== "object") {
    error(
      "isEmptyObject()",
      `Function requires an object as parameter instead of ${typeof object}`
    )
    return
  }

  return Object.keys(object).length === 0
}
