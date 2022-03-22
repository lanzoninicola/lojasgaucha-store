import { getCurrentDevice, isValidBreakpoints } from "@layouts/lib/index"
import { isObject, error } from "@utils/index"

export default function getCurrentDeviceValue(
  values = {},
  options = { userDevice: "" }
) {
  const { userDevice } = options

  if (!isObject(values)) {
    error(
      `getCurrentDeviceValue()`,
      `The first parameter: "values" passed to the function must be an object, instead of ${typeof values}`
    )
    return
  }

  if (isValidBreakpoints(values)) {
    if (userDevice === "") {
      const { device: currentDeviceFormFactor } = getCurrentDevice()
      return values[currentDeviceFormFactor]
    } else {
      return values[userDevice]
    }
  } else {
    error(
      `getCurrentDeviceValue()`,
      `The first parameter: "values" passed to the function does not contain valid breakpoints: ${JSON.stringify(
        values
      )}`
    )
    return
  }
}
