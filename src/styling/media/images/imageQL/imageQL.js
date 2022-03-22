import * as React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { isNotString, isUndefined, error } from "@utils/index"
import { useViewportInfo } from "@hooks"

import setGatsbyFluidData from "../lib/setGatsbyFluidData"
import resetGatsbyImageWrapperStyle from "../lib/resetGatsbyImageWrapperStyle"
import resetGatsbyImageStyle from "../lib/resetGatsbyImageStyle"
import HelpImageQL from "../lib/helpImageQL"

//TODO:
// adding fallback when an image is not available

const DEFAULT_BOXSHADOW =
  "rgba(0, 6, 36, 0.25) 0px 26px 24px -16px, rgba(0, 6, 36, 0.3) 0px 16px 24px -18px, rgba(0, 6, 36, 0.07) 0px 0px 10px 0px"

const ImageQL = ({
  children,
  data,
  wrapperStyle,
  imgStyle,
  shadow,
  alt,
  title,
  ignoreAlt,
  ignoreTitle,
  help,
  ...props
}) => {
  const { device } = useViewportInfo()
  function setWrapperStyle() {
    return {
      ...wrapperStyle,
      boxShadow: shadow && DEFAULT_BOXSHADOW,
      ...resetGatsbyImageWrapperStyle(),
    }
  }

  function setImageStyle() {
    return {
      ...imgStyle,
      objectFit: "contain",
      ...resetGatsbyImageStyle(),
    }
  }

  return (
    <>
      {!help && (
        <Img
          fluid={setGatsbyFluidData(data, device)}
          style={setWrapperStyle()}
          imgStyle={setImageStyle()}
          {...props}
        />
      )}
      {help && <HelpImageQL />}
    </>
  )
}

ImageQL.propTypes = {
  data: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      return error(
        `${componentName}`,
        `The ${propName} is required for the "${componentName}" component. The ${propName} is ${typeof propName}`
      )
    }
  },
  wrapperStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  alt: function (props, propName, componentName) {
    if (props["ignoreAlt"] && props["ignoreAlt"] === false) {
      if (!props[propName]) {
        return error(`${componentName}`, `The "alt" attribute is missing.`)
      }

      if (isNotString(props[propName])) {
        return error(
          `${componentName}`,
          `The "alt" attribute must be a string.`
        )
      }
    }
  },
  title: function (props, propName, componentName) {
    if (props["ignoreTitle"] && props["ignoreTitle"] === false) {
      if (!props[propName]) {
        return error(`${componentName}`, `The "title" attribute is missing.`)
      }

      if (isNotString(props[propName])) {
        return error(
          `${componentName}`,
          `The "title" attribute must be a string.`
        )
      }
    }
  },
  ignoreAlt: PropTypes.bool,
  ignoreTitle: PropTypes.bool,
}

export default ImageQL
