import { theme } from "@theme"
import { objectKeys } from "@utils"

export default function getBreakpoints() {
  const themeBreakpoints = theme?.breakpoints.viewportDevices
  return objectKeys(themeBreakpoints)
}
