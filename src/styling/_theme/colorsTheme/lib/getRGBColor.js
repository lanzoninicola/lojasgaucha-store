/**
 * Return RGBA color from HEX color
 * @param {string} hexColor
 * * @param {number} opacity
 */

import { error, warn, isUndefined } from "@utils"
import { isHEXColor, hexToRgb } from "./index"

const getRGBColor = (hexColor, opacity) => {
  if (!isHEXColor(hexColor)) {
    return error(
      "getRGBColor()",
      `You must pass an HEX Color code as parameter, instead of ${hexColor}`
    )
  }

  if (isUndefined(opacity)) {
    warn(
      "getRGBColor()",
      `You did not pass the opacity value: ${opacity}, a color with opacity 1 is returned as default`
    )
  }

  let rgbColor = hexToRgb(hexColor)
  return `rgba(${rgbColor?.r}, ${rgbColor?.g}, ${rgbColor?.b}, ${opacity ?? 1})`
}

export default getRGBColor
