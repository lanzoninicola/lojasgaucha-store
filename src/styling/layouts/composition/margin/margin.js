import * as React from "react"
import styled, { css, ThemeContext } from "styled-components"

import { useViewportInfo, useResponsiveSize } from "@hooks"
import { stringToArray, arrayToString, isNotString } from "@utils/index"

export const Margins = css`
  margin-left: ${({ ml, marginLeft }) => {
    const marginProp = ml ?? marginLeft
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin-right: ${({ mr, marginRight }) => {
    const marginProp = mr ?? marginRight
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin-bottom: ${({ mb, marginBottom }) => {
    const marginProp = mb ?? marginBottom
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin-top: ${({ mt, marginTop }) => {
    const marginProp = mt ?? marginTop
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin: ${({ m, margin }) => {
    if (m || margin) {
      const marginProp = m ?? margin

      if (isNotString(marginProp)) {
        console.error(
          `The property "m" or "margin" must be a string and not ${typeof marginProp}`
        )
        return null
      }

      const marginArray = stringToArray(marginProp, " ")

      let newMarginArray = marginArray.map(marginValue => {
        return useResponsiveSize(marginValue)
      })

      return arrayToString(newMarginArray)
    }

    return null
  }};
`

const StyledMargin = styled.div`
  ${Margins}
`

export const Margin = React.forwardRef(({ children, ...props }, ref) => {
  const themeContext = React.useContext(ThemeContext)
  const { device } = useViewportInfo()
  const layoutSpaceTheme = themeContext?.layout?.space
  const themeMarginLeft = layoutSpaceTheme?.marginLeft[device] ?? null
  const themeMarginRight = layoutSpaceTheme?.marginRight[device] ?? null
  const themeMarginTop = layoutSpaceTheme?.marginTop[device] ?? null
  const themeMarginBottom = layoutSpaceTheme?.marginBottom[device] ?? null

  return (
    <StyledMargin
      ref={ref}
      ml={themeMarginLeft}
      mr={themeMarginRight}
      mt={themeMarginTop}
      mb={themeMarginBottom}
      {...props}
    >
      {children}
    </StyledMargin>
  )
})
