import styled from "styled-components"
import { useResponsiveSize } from "@hooks/index"
import { isColorTheme, colorTheme } from "@colors/lib"

const Divider = styled.hr`
  height: 1px;
  margin-left: ${({ shrink }) => {
    if (shrink) return useResponsiveSize(shrink)

    return null
  }};
  margin-right: ${({ shrink }) => {
    if (shrink) return useResponsiveSize(shrink)

    return null
  }};
  background-color: ${({ color, opacity }) => {
    if (isColorTheme(color)) return colorTheme(color)
    if (opacity) return colorTheme(color, { opacity: opacity })

    return color
  }};
  ${props => props.$style ?? {}}
`

export default Divider
