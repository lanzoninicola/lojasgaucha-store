/**
 * Get the rightest char of value based on char numbers.
 * @param {text} text
 * @param {int} number
 */

import { isNotString, isNotNumber, error } from "@utils"

function renderTextUpto(text, charN) {
  if (isNotString(text)) {
    return error(
      `renderTextUpto`,
      `The first parameter "text" must be a string, instead of: ${typeof text}`
    )
  }
  if (isNotNumber(charN)) {
    return error(
      `renderTextUpto`,
      `The first parameter "charN" must be a number, instead of: ${typeof charN}`
    )
  }

  return `${text.substring(0, charN)}...`
}

export default renderTextUpto
