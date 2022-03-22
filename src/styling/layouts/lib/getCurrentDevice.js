import { theme } from "@theme"

import { getCurrentViewportDiagonal } from "@layouts/lib/index"
import { isUndefined, error } from "@utils/index"

export default function getCurrentDevice(userBreakpoints = {}) {
  const breakpoints = theme?.breakpoints ?? userBreakpoints

  if (isUndefined(breakpoints) || breakpoints === null) {
    error(
      `getCurrentDevice()`,
      `Breakpoints has not been defined. Please adding a "breakpoints" object to the "theme" object through ThemeProvider component or passing it to the function as first parameter`
    )
    return
  }

  if (!breakpoints.hasOwnProperty("viewportDevices")) {
    error(
      `getCurrentDevice()`,
      `"viewportDevices" prop of "breakpoints" object is missing.`
    )
    return
  }

  const devices = breakpoints["viewportDevices"]

  const currentDevice = { device: null, size: 0 }
  const { diagonal } = getCurrentViewportDiagonal()

  if (isUndefined(diagonal) || diagonal === null) {
    error(
      `getCurrentDevice()`,
      `The "diagonal" value is missing: ${diagonal}. We cannot detect the device in use.`
    )
  }

  // TODO: It might be improved maybe normalizing the breakpoint data
  // with flat data-structure and avoiding double looping
  Object.keys(devices).forEach(device => {
    Object.keys(devices[device]).forEach(size => {
      if (diagonal >= Math.round(devices[device][size].diagonal)) {
        currentDevice.device = device
        currentDevice.size = devices[device][size].name
        return currentDevice
      }
    })
  })

  return currentDevice
}
