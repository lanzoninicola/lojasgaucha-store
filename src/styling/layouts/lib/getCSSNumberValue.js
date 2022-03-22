import { isUndefined, error } from "@utils"

/**
 * @param {string|number} cssPropValue
 */
function getCSSNumberValue(cssPropValue) {
  // if (isNumber(cssPropValue)) {
  //   cssPropValue = cssPropValue.toString()
  // }
  // return cssPropValue.match(/[0-9]+/g)?.join("")

  if (isUndefined(cssPropValue)) {
    return error(
      "getCSSNumberValue()",
      "You must pass a CSS prop value as parameter."
    )
  }

  return parseFloat(cssPropValue)
}

export default getCSSNumberValue
