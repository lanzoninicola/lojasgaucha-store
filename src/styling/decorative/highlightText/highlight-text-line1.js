import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Size from "../../layouts/composition/size/size"
import { Span } from "@layouts/index"

const Line1 = styled.div`
  ${Size}
  position: absolute;
  top: ${({ top }) => {
    if (top) return top
    return "0%"
  }};
  left: ${({ left }) => {
    if (left) return left
    return "10%"
  }};
  margin-left: -8%;
  z-index: -1;
  background: ${({ bg }) => {
    if (bg) return bg
    return "#000000"
  }};
`

const HighlightTextLine1 = ({
  bg,
  color,
  left,
  newLine,
  children,
  ...props
}) => {
  return (
    <>
      <Span newLine={newLine} color={color}>
        {children}
        <Line1 bg={bg} h="75%" w="102%" left={left} wFixed {...props} />
      </Span>
    </>
  )
}

HighlightTextLine1.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string,
  lfet: PropTypes.string,
  newLine: PropTypes.bool,
}

export default HighlightTextLine1
