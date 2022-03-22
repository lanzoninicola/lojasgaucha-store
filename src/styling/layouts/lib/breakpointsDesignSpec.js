import { theme } from "@theme"

import { isUndefined, error } from "@utils/index"

export default function breakpointsDesignSpec(
  currentDevice,
  userBreakpoints = {}
) {
  const breakpoints = theme?.breakpoints ?? userBreakpoints
  const _currentDevice = currentDevice ?? theme?.breakpoints?.baseLineDevice

  if (isUndefined(breakpoints) || breakpoints === null) {
    error(
      `breakpointsDesignSpec()`,
      `Breakpoints has not been defined. Please adding a "breakpoints" object to the "theme" object through ThemeProvider component or passing it to the function as first parameter`
    )
    return
  }

  const DEVICE_SPEC = breakpoints?.designSpecification[_currentDevice]
  const VIEWPORT_DIAGONAL_SPEC =
    breakpoints?.viewportDevices[_currentDevice][DEVICE_SPEC].diagonal

  return { diagonalSpec: VIEWPORT_DIAGONAL_SPEC }
}
