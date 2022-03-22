import { css } from "styled-components"

import { Margins, Paddings, Size, Position } from "@layouts/index"
import { useResponsiveSize } from "@hooks/index"
import { isFunction } from "@utils"
import { isColorTheme, colorTheme } from "@colors/lib"

// https://stackoverflow.com/faqs/56651064/changing-tag-type-when-ealignXtending-component-in-styled-components

const Grid = css`
  ${Margins} 
  ${Paddings}
  ${Size}
  ${Position}
  display: grid;
  justify-items: ${({ left, centerX, right, stretchX }) => {
    if (left) return `start`
    if (centerX) return `center`
    if (right) return `end`
    if (stretchX) return `stretch`
  }}}};
  align-items: ${({ top, centerY, bottom, stretchY }) => {
    if (top) return `start`
    if (centerY) return `center`
    if (bottom) return `end`
    if (stretchY) return `stretch`
  }};
  gap: ${({ theme, gap }) => {
    if (gap) return useResponsiveSize(gap)
    const themeGridLayout = theme?.layout?.grid

    return useResponsiveSize(themeGridLayout.gap.default)
  }};
  max-width: 100vw;
  background: ${({ bg }) => {
    if (bg) {
      if (isFunction(bg)) return bg()
      if (isColorTheme(bg)) return colorTheme(bg)
      return bg
    }
    return null
  }};
`

Grid.defaultProps = {
  left: true,
  centerY: true,
}

export default Grid
