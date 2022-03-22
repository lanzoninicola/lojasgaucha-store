import * as React from "react"
import styled, { css } from "styled-components"

import { useResponsiveSize } from "@hooks"
import { usePaddingTheme } from "@layouts"
import { stringToArray, arrayToString, isString } from "@utils/index"

export const Paddings = css`
  padding-left: ${({ pl, paddingLeft }) => {
    const paddingProp = pl ?? paddingLeft
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding-right: ${({ pr, paddingRight }) => {
    const paddingProp = pr ?? paddingRight
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding-bottom: ${({ pb, paddingBottom }) => {
    const paddingProp = pb ?? paddingBottom
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding-top: ${({ pt, paddingTop }) => {
    const paddingProp = pt ?? paddingTop
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding: ${({ p, padding }) => {
    // log("space", { condition: p || padding, p: p, padding: padding })
    if (p || padding) {
      const paddingProp = p ?? padding

      //TODO: manage this
      // if (isObject(paddingProp)) {
      //   // console.log(useResponsiveSize(paddingProp))
      //   // Object.keys(paddingProp).forEach(prop => {
      //   //   const paddingArray = stringToArray(paddingProp[prop], " ")
      //   //   let newPaddingArray = paddingArray.map(paddingValue => {
      //   //     return useResponsiveSize(paddingValue)
      //   //   })
      //   //   return arrayToString(newPaddingArray)
      //   // })
      // }

      if (isString(paddingProp)) {
        const paddingArray = stringToArray(paddingProp, " ")

        let newPaddingArray = paddingArray.map(paddingValue => {
          return useResponsiveSize(paddingValue)
        })
        return arrayToString(newPaddingArray)
      }
    }

    return null
  }};
`

const StyledPadding = styled.div`
  ${Paddings}
`

export const Padding = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledPadding ref={ref} {...props}>
      {children}
    </StyledPadding>
  )
})
