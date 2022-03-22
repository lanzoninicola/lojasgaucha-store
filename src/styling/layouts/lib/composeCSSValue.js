import CSSRelativeUnits from "./CSSRelativeUnits";
import { getCSSUnit, isValidCSSUnit, getCSSNumberValue } from "./index";
import { isNotNumber, isNotString, error } from "@utils";

const defaultCSSUnit = CSSRelativeUnits.default;

/**
 * cssPropValue is the value assigned to the CSS property by the user .
 * It could contains or not the CSS unit
 * @param {string|number} cssPropValue
 */
export default function composeCSSValue(cssPropValue) {
  if (cssPropValue === undefined) {
    return cssPropValue;
  }

  if (isNotString(cssPropValue) && isNotNumber(cssPropValue)) {
    error(
      `composeCSSValue()`,
      `The value of CSS Property used must be a string or number and not ${typeof cssPropValue}`
    );
    return cssPropValue;
  }

  const userCSSUnit = getCSSUnit(cssPropValue);
  const userCSSValue = getCSSNumberValue(cssPropValue);

  const _isValidCSSUnit = isValidCSSUnit(userCSSUnit);

  // if user passed a number value with a CSSUnit that doesn't exist
  if (!_isValidCSSUnit && userCSSUnit?.length > 0) {
    // console.log("composeCSSValue 1", `${userCSSValue}${defaultCSSUnit}`)
    return { value: userCSSValue, unit: defaultCSSUnit };
  }

  // if user passed only a number value
  if (!_isValidCSSUnit && userCSSUnit === undefined) {
    // console.log("composeCSSValue 2", `${userCSSValue}${defaultCSSUnit}`)
    return { value: userCSSValue, unit: defaultCSSUnit };
  }

  // if user passed a number value with a CSSUnit that exist
  if (_isValidCSSUnit) {
    // console.log("composeCSSValue 3", `${userCSSValue}${defaultCSSUnit}`)
    return { value: userCSSValue, unit: userCSSUnit };
  }
}
