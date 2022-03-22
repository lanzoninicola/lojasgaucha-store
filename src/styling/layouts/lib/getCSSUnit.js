import { isNumber } from "@utils"

/**
 * @param {string|number} cssPropValue
 */
function getCSSUnit(cssPropValue) {
  if (isNumber(cssPropValue)) {
    cssPropValue = cssPropValue.toString()
  }

  return cssPropValue.match(/[%vhrempx]/gi)?.join("")
}

export default getCSSUnit
