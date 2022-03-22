import * as React from "react"
import styled from "styled-components"
import BaseButton from "./baseButton"

import useHover from "../_hooks/useHover"

// TODO: make naming more generic
// TODO: build a sort of state style (default, hover, onClick, focus) for button template
const StyledPrimaryButtonBlue = styled(BaseButton)`
  background: ${({ theme }) => {
    return theme.button?.primary?.blue?.background.default
  }};

  color: ${({ theme, hovered }) => {
    return hovered
      ? theme.button?.primary?.blue?.labelColor.onHover
      : theme.button?.primary?.blue?.labelColor.default
  }};
`

const StyledPrimaryButtonOrange = styled(BaseButton)`
  background: ${({ theme }) => {
    return theme.button?.primary?.orange?.background.default
  }};

  color: ${({ theme, hovered }) => {
    return hovered
      ? theme.button?.primary?.orange?.labelColor.onHover
      : theme.button?.primary?.orange?.labelColor.default
  }};
`

export const PrimaryButtonOrange = ({ children }) => {
  const [ref, hoveredStatus] = useHover()

  return (
    <StyledPrimaryButtonOrange ref={ref} hovered={hoveredStatus}>
      {children}
    </StyledPrimaryButtonOrange>
  )
}

export const PrimaryButtonBlue = ({ children }) => {
  const [ref, hoveredStatus] = useHover()

  return (
    <StyledPrimaryButtonBlue ref={ref} hovered={hoveredStatus}>
      {children}
    </StyledPrimaryButtonBlue>
  )
}
