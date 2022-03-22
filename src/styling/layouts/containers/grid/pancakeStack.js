import * as React from "react"
import styled from "styled-components"
import Grid from "./grid"

/**
 *    PancakeStack: Max 3 rows
 *    https://1linelayouts.glitch.me/*
 */
const StyledPancakeStack = styled.div`
  ${Grid}
  grid-template-rows: auto minmax(0,1fr) auto;
  ${props => props.$style ?? {}}
`

const PancakeStack = React.forwardRef(({ children, ...props }, ref) => (
  <StyledPancakeStack ref={ref} {...props}>
    {children}
  </StyledPancakeStack>
))

export default PancakeStack
