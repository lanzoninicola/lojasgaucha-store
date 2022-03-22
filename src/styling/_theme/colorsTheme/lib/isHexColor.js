/**
 * This function check if the color passed is in HEX format
 * @param {string} color
 */

import { isNotString, error } from "@utils"

// const isHEXColor = color.substring(0, 1) === "#"

function isHEXColor(color) {
  if (isNotString(color)) {
    return error(
      "isHEXColor()",
      `Parameter must be a string instead of: ${typeof color}`
    )
  }

  return color.substring(0, 1) === "#"
}

export default isHEXColor
