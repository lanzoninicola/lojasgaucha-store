import { css } from "styled-components"

import { composeCSSValue } from "@layouts/lib/index"
import { useResponsiveSize } from "@hooks/index"

const Size = css`
  height: ${({ h, height, h100, h100v, hAuto, hFixed }) => {
    if (h100) return `100%`
    if (h100v) return `100vh`
    if (hAuto) return `auto`
    if (h || height) {
      let inputValue = h ?? height

      if (hFixed) {
        const { value, unit } = composeCSSValue(inputValue)
        return `${value}${unit}`
      }

      return useResponsiveSize(inputValue)
    }
    return `auto`
  }};
  width: ${({ w, width, w100, w100v, wAuto, wFixed }) => {
    if (w100) return `100%`
    if (w100v) return `100vw`
    if (wAuto) return `auto`
    if (w || width) {
      let inputValue = w ?? width

      if (wFixed) {
        const { value, unit } = composeCSSValue(inputValue)
        return `${value}${unit}`
      }

      return useResponsiveSize(inputValue)
    }

    return `auto`
  }};
  min-width: ${({ wMin }) => {
    if (wMin) return useResponsiveSize(wMin)
    return null
  }};
  min-height: ${({ hMin }) => {
    if (hMin) return useResponsiveSize(hMin)
    return null
  }};
  max-width: ${({ wMax }) => {
    if (wMax) return useResponsiveSize(wMax)
    return null
  }};
  max-height: ${({ hMax }) => {
    if (hMax) return useResponsiveSize(hMax)
    return null
  }};
`
export default Size
