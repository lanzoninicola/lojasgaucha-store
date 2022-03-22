import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Typeface from "./typeface"
import { getFontSize, getLineHeight } from "@typography/lib"

import { useResponsiveSize } from "@hooks/index"
import { isUndefined, isObject, isNotString, warn, error } from "@utils/index"

const StyledTitle = styled(motion.div)`
  ${Typeface}
  font-size: ${({ theme, as, variant, size, debug }) => {
    if (isUndefined(as)) {
      warn(
        "Title - font-size",
        `The prop "as" is missing. The default "h1" headline has been applied`
      )

      as = "h1"
    }

    const themeVariant = theme.typography[variant]
    if (!themeVariant.hasOwnProperty(as)) {
      return error(
        "Title - font-size",
        `Missing related font-size for the variant: "${variant}",`
      )
    }
    const devicesFontSize = themeVariant[as.toLowerCase()].fontSize
    const _fontSize = getFontSize(size, devicesFontSize)

    return useResponsiveSize(_fontSize, debug)
  }};
  line-height: ${({ theme, as, variant, size, lh }) => {
    if (isUndefined(as)) as = "h1"

    const themeVariant = theme.typography[variant]
    if (!themeVariant.hasOwnProperty(as)) {
      return error(
        "Title - line-height",
        `Missing related line-height for the variant: "${variant}"`
      )
    }

    const deviceslineHeight = themeVariant[as.toLowerCase()].lineHeight
    const devicesFontSize = themeVariant[as.toLowerCase()].fontSize
    const _lineHeight = getLineHeight(
      lh,
      size,
      deviceslineHeight,
      devicesFontSize
    )

    return useResponsiveSize(_lineHeight)
  }};
  ${({ $style }) => $style ?? {}}
`

const Title = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>
}

Title.defaultProps = {
  variant: "primary",
  weight: "400",
  color: "#000000",
}

Title.propTypes = {
  variant: PropTypes.string,
  weight: (props, propName, componentName) => {
    if (isNotString(props[propName]) && !isObject(props[propName])) {
      error(
        `${componentName}`,
        `The "${propName}" prop for the component ${componentName} must be a string or object.`
      )
    }
  },
  as: (props, propName, componentName) => {
    if (typeof props[propName] !== "string") {
      error(
        `${componentName}`,
        `The "${propName}" prop for the component ${componentName} must be a string.`
      )
    }

    if (isUndefined(props[propName]) || props[propName] === "") {
      warn(
        `${componentName}`,
        `"${propName}" prop (typeof "string") is missing, so the value "h1" has been assigned as the default. Define your "${propName}" prop value to declare the "Header HTML Tag".`
      )
    }
  },
}

export default Title
