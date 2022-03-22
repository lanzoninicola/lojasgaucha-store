import * as React from "react"
import styled from "styled-components"
import { FlexContainer } from "@layouts"
import { useResponsiveSize } from "@hooks"
import { Margins, Paddings } from "@layouts"
import { composeCSSValue } from "@layouts/lib"
import { isObject } from "@utils"

const DEFAULT_HEIGHT_BREAKPOINTS = { laptop: 400, tablet: 400, mobile: 350 }
const DEFAULT_WIDTH_BREAKPOINTS = { laptop: 200, tablet: 200, mobile: 250 }

const StyledBaseCardWrapper = styled(FlexContainer)`
  ${Margins}
  ${Paddings}
  height: ${({ h, height }) => {
    const hProps = h ?? height
    const sizeBreakpoints = {
      laptop: hProps,
      tablet: hProps,
      mobile: hProps,
    }

    if (hProps) {
      if (!isObject(hProps)) {
        return useResponsiveSize(sizeBreakpoints)
      }
      return useResponsiveSize(hProps)
    }

    return useResponsiveSize(DEFAULT_HEIGHT_BREAKPOINTS)
  }};
  width: ${({ w, width }) => {
    const wProps = w ?? width
    const sizeBreakpoints = {
      laptop: wProps,
      tablet: wProps,
      mobile: wProps,
    }

    if (wProps) {
      if (!isObject(wProps)) {
        return useResponsiveSize(sizeBreakpoints)
      }
      return useResponsiveSize(wProps)
    }

    return useResponsiveSize(DEFAULT_WIDTH_BREAKPOINTS)
  }};
  border: none;
  border-radius: ${({ br }) => {
    if (br) return br
    return `25px`
  }};
  box-shadow: ${({ noShadow }) => {
    if (noShadow) return null
    return `rgba(0, 6, 36, 0.25) 0px 26px 24px -16px,
    rgba(0, 6, 36, 0.3) 0px 16px 24px -18px,
    rgba(0, 6, 36, 0.07) 0px 0px 10px 0px;`
  }};
  padding: 20px 30px 20px 30px;
  margin-left: ${({ gap }) => {
    const _gapLeft = parseInt(gap) / 2
    const { value, unit } = composeCSSValue(_gapLeft)

    if (gap) return `${value}${unit}`
    return null
  }};
  margin-right: ${({ gap }) => {
    const _gapRight = parseInt(gap) / 2
    const { value, unit } = composeCSSValue(_gapRight)

    if (gap) return `${value}${unit}`
    return null
  }};
`

const BaseCardWrapper = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledBaseCardWrapper column stretchXL ref={ref} {...props}>
      {children}
    </StyledBaseCardWrapper>
  )
})

export default BaseCardWrapper
