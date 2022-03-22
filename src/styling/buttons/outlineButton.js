import * as React from "react"
import styled from "styled-components"
import { Size, Margins, Paddings } from "@layouts"
import { colorTheme } from "@colors/lib"

const StyledOutlineButton = styled.button`
  ${Size}
  ${Margins}
  ${Paddings}
  position: relative;
  border: 2px solid;
  border-color: ${() => {
    return colorTheme("whitegray")
  }}};
  border-radius: 50px;
  background: none;
  font-family: ${({ theme }) => theme.typography.secondary.family};
  font-weight: normal;
  font-size: 16px;
  color: ${() => {
    return colorTheme("whitegray")
  }}};
  cursor: pointer;
`

const OutlineButton = React.forwardRef(
  ({ children, textStyle, ...props }, ref) => (
    <StyledOutlineButton
      ref={ref}
      w="215"
      h="50"
      mt="16"
      wFixed
      hFixed
      {...props}
    >
      {children}
    </StyledOutlineButton>
  )
)

export default OutlineButton
