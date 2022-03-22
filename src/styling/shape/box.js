import PropTypes from "prop-types"
import styled from "styled-components"
import { colorTheme } from "@colors/lib"
import { Size } from "@layouts/index"
import { composeCSSValue } from "@layouts/lib/index"
import { isUndefined, warn } from "@utils/index"

const Box = styled.div`
  ${Size}
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

Box.propTypes = {
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

export default Box
