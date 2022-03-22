import * as React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { isUndefined, error } from "@utils"

const Svg = ({ sourcePath, color, size, wSVG, hSVG, animation }) => {
  const _height = hSVG ?? size
  const _width = wSVG ?? size

  return (
    <svg
      width={_width} // icons always are equal width and height
      height={_height} // icons always are equal width and height
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={sourcePath} fill={color} />
    </svg>
  )
}

Svg.propTypes = {
  sourcePath: PropTypes.string.isRequired,
  size: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      return error(
        `${componentName}`,
        `The ${propName} is required to render the icon. ${componentName} is ${props[propName]}`
      )
    }
  },
  color: PropTypes.string,
  wSVG: PropTypes.string,
  hSVG: PropTypes.string,
}

export default Svg
