import * as React from "react"

import { composeCSSValue } from "@layouts/lib/index"
import { useViewportInfo } from "@hooks"
import { isObject, error } from "@utils"

/**
 *  This is different from "useResponsiveSize" hook
 *  It returns the FIXED size passed as parameter depending on the device in use
 *
 *  This hook works only with PXs value
 */

export default function useDeviceSize(size = {}, debug = false) {
  const [responsiveSize, setResponsiveSize] = React.useState()
  const { device: currentDeviceFormFactor } = useViewportInfo()

  if (!isObject(size)) {
    error(
      `useDeviceSize()`,
      `The size passed as parameter must be an object, instead of: ${typeof size}. You must define the size for each breakpoints: mobile, tablet, laptop.`
    )
  }

  function exitNoChanges() {
    return size
  }

  const getSizePerDevice = React.useCallback(() => {
    let _responsiveSize

    if (currentDeviceFormFactor) {
      const _userSize = size[currentDeviceFormFactor]
      const { value: userSize, unit: userUnit } = composeCSSValue(_userSize)

      if (userUnit !== "px" || userUnit !== "PX") exitNoChanges()

      _responsiveSize = userSize
    }

    setResponsiveSize(_responsiveSize)
  }, [currentDeviceFormFactor, size])

  React.useEffect(() => {
    getSizePerDevice()
  }, [currentDeviceFormFactor, getSizePerDevice])

  return `${responsiveSize}px`
}
