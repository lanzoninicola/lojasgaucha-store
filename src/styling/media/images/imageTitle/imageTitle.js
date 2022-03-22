import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FlexContainer, Margins, Paddings } from "@layouts/index"
import { composeCSSValue } from "@layouts/lib/index"
import { Title } from "@typography/index"
import { colorTheme } from "@colors/lib"

/**
 *  Positions:
 *  topLeft, topRight, center, bottomLeft, bottomRight, bottomCenter
 */

const StyledImageTitle = styled.div`
  ${Margins}
  ${Paddings}
  background: ${({ bg }) => {
    if (bg) return bg

    return null
  }};
  height: ${({ h, height, fluid }) => {
    const _height = h ?? height
    if (_height) {
      const { value, unit } = composeCSSValue(_height)
      return `${value}${unit}`
    }

    if (fluid) return `auto`

    return `auto`
  }};
  width: ${({ w, width, fluid }) => {
    const _width = w ?? width
    if (w) {
      const { value, unit } = composeCSSValue(_width)
      return `${value}${unit}`
    }

    if (fluid) return `auto`

    return `auto`
  }};
  position: absolute;
  top: ${({ topLeft, topRight, center, bottomCenter }) => {
    if (topLeft || topRight) return `8px`
    if (center) return `50%`
    if (bottomCenter) return `85%`

    return null
  }};
  bottom: ${({ bottomLeft, bottomRight }) => {
    if (bottomLeft || bottomRight) return `8px`

    return null
  }};
  left: ${({ topLeft, bottomLeft, center, bottomCenter }) => {
    if (topLeft) return `16px`
    if (bottomLeft) return `16px`
    if (center || bottomCenter) return `50%`

    return null
  }};
  right: ${({ topRight, bottomRight }) => {
    if (topRight) return `16px`
    if (bottomRight) return `16px`

    return null
  }};
  transform: ${({ center, bottomCenter }) => {
    if (center || bottomCenter) return `translate(-50%, -50%)`

    return null
  }};
  ${({ $style }) => $style ?? {}}
`

const ImageTitle = ({
  children,
  bg,
  text,
  color,
  uppercase,
  lowercase,
  ...props
}) => {
  return (
    <StyledImageTitle padding="4 4 4 4" bg={bg} {...props}>
      <FlexContainer row centerX centerY>
        <Title
          as="h4"
          color={colorTheme(color) ?? colorTheme("black")}
          uppercase={uppercase ?? null}
          lowercase={lowercase ?? null}
        >
          {text}
        </Title>
        {children}
      </FlexContainer>
    </StyledImageTitle>
  )
}

ImageTitle.propTypes = {
  bg: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
}

export default ImageTitle
