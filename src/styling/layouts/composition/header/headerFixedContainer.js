import styled from "styled-components"
import Header from "./header"

// Keep the site header visible when a visitor scrolls the page.
const HeaderFixedContainer = styled(Header)`
  // position: fixed;
  z-index: 999;
  ${props => props.$style ?? {}}
`

export default HeaderFixedContainer
