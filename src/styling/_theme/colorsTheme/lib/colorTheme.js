/**
 * Get the color for the theme. The default color returned is in HEX notation.
 * @param {string} color
 * @param {object} options
 */

import colorsTheme from "../colorsTheme"

import { isNotNumber, isNotString, error, warn } from "@utils"
import { isColorTheme, getRGBColor } from "./index"

const colorTheme = (color, options = { opacity: 1 }) => {
  if (isNotString(color)) {
    return error(
      "colorTheme()",
      `First parameter "color" must be a string, instead of: ${typeof color}`
    )
  }

  if (!isColorTheme(color)) {
    warn(
      "colorTheme()",
      `The color choosed: ${color} does not exist in the theme color palette, then it will be managed by the browser`
    )
    return color
  }

  if (isNotNumber(options.opacity)) {
    return error("colorTheme()", "The opacity parameter must be a number")
  }

  const themeColors = colorsTheme()
  const themeColor = themeColors[color]

  // user can set opacity
  if (options.opacity) {
    return getRGBColor(themeColor, options.opacity)
  }

  return themeColor
}

export default colorTheme
