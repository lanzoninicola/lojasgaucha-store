import * as React from "react"
import ViewportContext from "./viewportContext"
import {
  getCurrentWindowSize,
  getCurrentViewportDiagonal,
  getCurrentDevice,
} from "@layouts/lib/index"
import { isDomAvailable, debounce } from "@utils/index"

// TODO: to be verified: wrapped window and document object to control behaviours
// TODO: https://github.com/aragon/use-viewport/blob/master/src/viewport.tsx - check useRef implementation

const ViewportProvider = ({ children }) => {
  const [viewportInfo, setViewportInfo] = React.useState({
    ...getCurrentWindowSize(),
    ...getCurrentViewportDiagonal(),
    ...getCurrentDevice(),
  })

  const updateWindowSize = React.useCallback(() => {
    const { width, height } = getCurrentWindowSize()
    const { diagonal } = getCurrentViewportDiagonal()
    const { device, size } = getCurrentDevice()

    const nextViewportInfo = {
      ...viewportInfo,
      device,
      size,
      width,
      height,
      diagonal,
    }

    setViewportInfo(nextViewportInfo)
    //-- // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewportInfo.diagonal])

  const resizeStop = React.useCallback(() => {
    if (isDomAvailable) {
      window.removeEventListener("load", updateWindowSize)
      window.removeEventListener("resize", updateWindowSize)
    }
  }, [updateWindowSize])

  const resizeStart = React.useCallback(() => {
    debounce(updateWindowSize(), 100)

    if (isDomAvailable) {
      window.removeEventListener("load", updateWindowSize)
      window.addEventListener("resize", updateWindowSize)
    }
  }, [updateWindowSize])

  React.useEffect(() => {
    resizeStart()

    return () => {
      resizeStop()
    }
  }, [resizeStart, resizeStop])

  return (
    <ViewportContext.Provider value={viewportInfo}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider
