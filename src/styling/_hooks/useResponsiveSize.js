import * as React from "react"

import { composeCSSValue, breakpointsDesignSpec } from "@layouts/lib/index"
import { useViewportInfo } from "@hooks"
import { isObject } from "@utils/index"

// INSPIRATION
// https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
// https://fvsch.com/css-locks

// This hook works only with PXs value

export default function useResponsiveSize(
  size = {},
  debug = false
  // userDiagonal
) {
  const [responsiveSize, setResponsiveSize] = React.useState()
  const {
    device: currentDeviceFormFactor,
    diagonal: currentViewportDiagonal,
  } = useViewportInfo()
  const { diagonalSpec: viewportDiagonalDesignSpec } = breakpointsDesignSpec(
    currentDeviceFormFactor
  )

  function exitNoChanges() {
    return size
  }

  const getUserSize = React.useCallback(() => {
    return isObject(size) ? size[currentDeviceFormFactor] ?? 0 : size
  }, [currentDeviceFormFactor, size])

  const getResponsiveSize = React.useCallback(() => {
    const _userSize = getUserSize()
    const { value: userSize, unit: userUnit } = composeCSSValue(_userSize)

    if (userUnit !== "px" || userUnit !== "PX") exitNoChanges()

    const _responsiveSize = Math.round(
      (currentViewportDiagonal / viewportDiagonalDesignSpec) * userSize
    )

    setResponsiveSize(_responsiveSize)
  }, [getUserSize, currentViewportDiagonal])

  React.useEffect(() => {
    getResponsiveSize()
  }, [currentViewportDiagonal])

  return `${responsiveSize}px`
}
