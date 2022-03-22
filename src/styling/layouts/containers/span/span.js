import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSpan = styled.span`
  position: relative;
  z-index: 1;
  white-space: ${({ newLine }) => {
    if (newLine) return "pre-wrap"

    return null
  }};
  color: ${({ color }) => {
    if (color) return color

    return null
  }};
  ${({ $style }) => $style ?? {}}
`

const Span = ({ children, ...props }) => (
  <StyledSpan {...props}>{children}</StyledSpan>
)

Span.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Span
