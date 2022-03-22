/**
 * This function check if the color is part of theme
 * @param {string} color
 */
import colorsTheme from "../colorsTheme"
import { isNotUndefined, isNotString, error } from "@utils"

function isColorTheme(color) {
  if (isNotString(color)) {
    return error(
      "isColorTheme()",
      `Parameter "color" must be a string, instead of: ${typeof color}`
    )
  }

  const themeColor = colorsTheme()

  return isNotUndefined(themeColor[color])
}

export default isColorTheme
