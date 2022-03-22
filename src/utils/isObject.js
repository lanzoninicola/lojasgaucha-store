/**
 * This function check if an object has props or not
 * @param {any} value
 */

export default function isObject(value) {
  if (Array.isArray(value)) {
    return false
  }

  if (value === "function") {
    return false
  }

  if (typeof value !== "object") {
    return false
  }

  return true
}
