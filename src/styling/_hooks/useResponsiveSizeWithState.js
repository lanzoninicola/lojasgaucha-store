import * as React from "react"
import { theme } from "@theme"

import {
  composeCSSValue,
  getCurrentViewportDiagonal,
  getCurrentDevice,
} from "@layouts/lib/index"
import {
  isUndefined,
  isObject,
  isNumber,
  isString,
  error,
  isDomAvailable,
  debounce,
} from "@utils/index"

// SOURCE
// https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
// https://fvsch.com/css-locks

// DO NOT USE IT - problem with hooks order

function breakpointsDesignSpec(currentDevice, userBreakpoints = {}) {
  const breakpoints = theme?.breakpoints ?? userBreakpoints

  if (isUndefined(breakpoints) || breakpoints === null) {
    error(
      `breakpointsDesignSpec()`,
      `Breakpoints has not been defined. Please adding a "breakpoints" object to the "theme" object through ThemeProvider component or passing it to the function as first parameter`
    )
    return
  }

  const DEVICE_SPEC = breakpoints?.designSpecification[currentDevice]
  console.log(currentDevice, DEVICE_SPEC)
  const VIEWPORT_DIAGONAL_SPEC =
    breakpoints?.viewportDevices[currentDevice][DEVICE_SPEC].diagonal

  return { diagonalSpec: VIEWPORT_DIAGONAL_SPEC }
}

export default function useResponsiveSize(size = {}) {
  const [elementSize, setElementSize] = React.useState(size)

  const updateElementSize = React.useCallback(() => {
    // I can't use ThemeProvider data, some components using this function are mounted
    // before the values requested here (device, diagonal) and located in the "theme" are available
    const { device: currentDeviceFormFactor } = getCurrentDevice()
    const { diagonal: currentViewportDiagonal } = getCurrentViewportDiagonal()
    const { diagonalSpec: viewportDiagonalDesignSpec } = breakpointsDesignSpec(
      currentDeviceFormFactor
    )

    const isFixedSize = !isObject(size) && (isNumber(size) || isString(size))

    // TODO: validation of size input
    // if(!isFixedSize && isObject(size)) {}

    let USER_SIZE = isFixedSize ? parseInt(size) : size[currentDeviceFormFactor]

    const resultSize = Math.round(
      (currentViewportDiagonal / viewportDiagonalDesignSpec) * USER_SIZE
    )

    const nextElementSize = composeCSSValue(resultSize)

    setElementSize(nextElementSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resizeStop = React.useCallback(() => {
    if (isDomAvailable) {
      window.removeEventListener("resize", updateElementSize)
    }
  }, [updateElementSize])

  const resizeStart = React.useCallback(() => {
    debounce(updateElementSize(), 100)

    if (isDomAvailable) {
      window.addEventListener("resize", updateElementSize)
    }
  }, [updateElementSize])

  React.useEffect(() => {
    resizeStart()

    return () => {
      resizeStop()
    }
  }, [resizeStart, resizeStop])

  return elementSize
}
