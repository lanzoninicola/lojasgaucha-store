import CSSRelativeUnits from "./CSSRelativeUnits"
import { isIncluded } from "@utils"

/**
 * @param {string} shouldCSSUnit
 */

const CSSUnits = CSSRelativeUnits.values

function isValidCSSUnit(shouldCSSUnit) {
  //TODO: validate inputs
  return isIncluded(shouldCSSUnit, CSSUnits) ? true : false
}

export default isValidCSSUnit
