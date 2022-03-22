import * as React from "react"
import { ThemeContext } from "styled-components"

import { useViewportInfo } from "@hooks"

const usePaddingTheme = () => {
  const themeContext = React.useContext(ThemeContext)
  const { device } = useViewportInfo()
  const layoutSpaceTheme = themeContext?.layout?.space
  const paddingLeft = layoutSpaceTheme?.paddingLeft[device] ?? null
  const paddingRight = layoutSpaceTheme?.paddingRight[device] ?? null
  const paddingTop = layoutSpaceTheme?.paddingTop[device] ?? null
  const paddingBottom = layoutSpaceTheme?.paddingBottom[device] ?? null

  return { paddingTop, paddingLeft, paddingBottom, paddingRight }
}

export default usePaddingTheme
