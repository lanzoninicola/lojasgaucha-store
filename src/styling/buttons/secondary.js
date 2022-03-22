import * as React from "react"
import styled from "styled-components"

import BaseButton from "./baseButton"

import useHover from "../_hooks/useHover"

//TODO refactor this organizing in dedicated folders

const StyledButtonSecondaryGreen = styled(BaseButton)`
  background: ${({ theme }) =>
    theme.button?.secondary?.green?.background.default};

  color: ${({ theme, hovered }) =>
    hovered
      ? theme.button?.secondary?.green?.labelColor.onHover
      : theme.button?.secondary?.green?.labelColor.default};
`

const StyledButtonSecondaryYellow = styled(BaseButton)`
  background: ${({ theme }) => {
    return theme.button?.secondary?.yellow?.background.default
  }};

  color: ${({ theme, hovered }) => {
    return hovered
      ? theme.button?.secondary?.yellow?.labelColor.onHover
      : theme.button?.secondary?.yellow?.labelColor.default
  }};
`

export const ButtonSecondaryYellow = ({ children }) => {
  const [ref, hoveredStatus] = useHover()

  return (
    <StyledButtonSecondaryYellow ref={ref} hovered={hoveredStatus}>
      {children}
    </StyledButtonSecondaryYellow>
  )
}

export const ButtonSecondaryGreen = ({ children }) => {
  const [ref, hoveredStatus] = useHover()

  return (
    <StyledButtonSecondaryGreen ref={ref} hovered={hoveredStatus}>
      {children}
    </StyledButtonSecondaryGreen>
  )
}
