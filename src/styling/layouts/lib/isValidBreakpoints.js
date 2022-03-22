import { getBreakpoints } from "@layouts/lib/index"

import { isObject, error } from "@utils/index"

function isValidBreakpoints(obj = {}) {
  if (!isObject) {
    error(
      `isValidBreakpoints()`,
      `Function parameter must be an object, instead of: ${typeof obj}`
    )
    return
  }

  const result = new Set()

  const themeBreakpointList = getBreakpoints()

  const breakpointsSet = new Set([...themeBreakpointList])

  Object.keys(obj).forEach(value => {
    breakpointsSet.has(value) ? result.add(1) : result.add(0)
  })

  return result.has(0) ? false : true
}

export default isValidBreakpoints
