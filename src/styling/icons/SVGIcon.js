import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"

import { FlexContainer } from "@layouts/index"
import { useViewportInfo } from "@hooks"
import { isUndefined, isFunction, error } from "@utils"
import { colorTheme, isColorTheme } from "@colors/lib"
import Svg from "./Svg"
import getIconSize from "./lib/getIconSize"

// import { log } from "@utils/index"

function SVGIcon({ name, size, color, wSVG, hSVG, ...props }) {
  const themeContext = React.useContext(ThemeContext)
  const iconsTheme = themeContext?.icons
  const { device: currentDevice } = useViewportInfo()
  const iconSize = getIconSize(size, currentDevice)
  const iconName = name.toUpperCase()
  let iconColor
  if (typeof color === "function" || !isColorTheme(color)) {
    iconColor = color
  } else {
    colorTheme(color)
  }

  const SVGSource = iconsTheme?.catalog?.[iconName]?.[iconSize]

  if (isUndefined(SVGSource)) {
    return error(
      `"SVGIcon"`,
      `Icon with name "${iconName}" and size "${iconSize}" not found.`
    )
  }

  const renderReactSVG = () => <SVGSource />

  const renderClassicSVG = props => (
    <Svg
      sourcePath={props?.SVGSource}
      size={props?.iconSize}
      color={props?.iconColor}
      {...props}
    />
  )

  function renderSVG(props) {
    const isReactComponent = isFunction(props?.SVGSource)
    if (isReactComponent) return renderReactSVG()

    return renderClassicSVG(props)
  }

  return (
    <FlexContainer centerX centerY {...props}>
      {renderSVG({
        iconName,
        SVGSource,
        iconSize,
        iconColor,
        wSVG,
        hSVG,
        ...props,
      })}
    </FlexContainer>
  )
}

SVGIcon.defaultProps = {
  name: "CIRCLE_X",
  size: "24",
  color: "#000",
}

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
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

export default SVGIcon
