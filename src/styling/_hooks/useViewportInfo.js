import * as React from "react"
import ViewportContext from "../layouts/context/viewport/viewportContext"

// TODO: to be verified: wrapped window and document object to control behaviours
// TODO: https://github.com/aragon/use-viewport/blob/master/src/viewport.tsx - check useRef implementation

function useViewportInfo() {
  const { device, size, height, width, diagonal } = React.useContext(
    ViewportContext
  )

  return {
    device,
    size,
    height,
    width,
    diagonal,
  }
}

export default useViewportInfo
