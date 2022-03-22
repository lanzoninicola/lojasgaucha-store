import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colorTheme } from "@colors/lib"
import { Size, FlexContainer } from "@layouts/index"
import { composeCSSValue } from "@layouts/lib/index"
import { isUndefined, warn } from "@utils/index"

const StyledTextBox = styled.div`
  ${Size}
  padding: ${({ p }) => p ?? `3px 10px 3px 10px`};
  background: ${({ bg, opacity }) => {
    return colorTheme(bg, {
      opacity: opacity ?? 1,
    })
  }};
  border-radius: ${({ br }) => {
    if (br) {
      const { value, unit } = composeCSSValue(br)
      return `${value}${unit}`
    }
    return null
  }};
`

const TextBox = ({ bg, opacity, br, children, ...props }) => {
  return (
    <FlexContainer row centerY wAuto>
      <StyledTextBox bg={bg} opacity={opacity} br={br} {...props}>
        <FlexContainer h100 w100 centerX>
          {children}
        </FlexContainer>
      </StyledTextBox>
    </FlexContainer>
  )
}

TextBox.propTypes = {
  children: PropTypes.node.isRequired,
  bg: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      warn(
        componentName,
        `${componentName} - The "${propName}" prop is undefined, this is meaning you are using a box without background. It will not visible inside the canvas.`
      )
    }
  },
  opacity: PropTypes.string,
  br: PropTypes.string,
}

export default TextBox
