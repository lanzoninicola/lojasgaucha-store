import { isObject } from "@utils/index"

function addStylesForFunction(styles) {
  styles.push("border-radius: 5px", "padding: 0px 5px 0px 5px")
}

function typeOfItem(item) {
  if (Array.isArray(item)) {
    return "array"
  }

  if (typeof item === "function") {
    return "function"
  }

  if (typeof item === "object") {
    return "object"
  }

  if (typeof item === "string") {
    return "string"
  }

  if (typeof item === "number") {
    return "number"
  }
}

/**
 * Customization of standard console function
 * @param {string} module
 * @param {string} item
 */

function traceError(module, item) {
  const err = console.error
  const styles = ["color: white", `background: red`, "font-size: 12px"]

  if (isObject(item)) {
    if (Object.keys(item).length > 0) {
      item = JSON.stringify(item)
    }
  }

  if (typeof item === "function") {
    addStylesForFunction(styles)
  } else {
    styles.push("border-radius: 10px", "padding: 5px")
  }

  const strStyle = styles.join(";")

  return err(`${module} %c${item}`, strStyle)
}

export function error(module, item) {
  try {
    traceError(module, item)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Customization of standard console function
 * @param {string} module
 * @param {string} item
 */

function traceWarn(module, item) {
  const warn = console.warn
  const styles = ["color: white", `background: orange`, "font-size: 12px"]

  if (isObject(item)) {
    if (Object.keys(item).length > 0) {
      item = JSON.stringify(item)
    }
  }

  if (typeof item === "function") {
    addStylesForFunction(styles)
  } else {
    styles.push("border-radius: 10px", "padding: 5px")
  }

  const strStyle = styles.join(";")

  return warn(`${module} %c${item}`, strStyle)
}

export function warn(module, item) {
  try {
    traceWarn(module, item)
  } catch (error) {
    traceError(error)
  }
}

/**
 * Customization of standard console function
 * @param {string} module
 * @param {string} item
 */
function traceLog(module, item) {
  const log = console.log
  const styles = ["color: white", `background: green`, "font-size: 12px"]
  const itemType = typeOfItem(item)

  if (isObject(item)) {
    if (Object.keys(item).length > 0) {
      item = JSON.stringify(item)
    }
  }

  if (typeof item === "function") {
    addStylesForFunction(styles)
  } else {
    styles.push("border-radius: 10px", "padding: 5px")
  }

  const strStyle = styles.join(";")

  return log(`${module} %c${itemType} ${item}`, strStyle)
}

export function log(module, item) {
  try {
    traceLog(module, item)
  } catch (error) {
    traceError(error)
  }
}
