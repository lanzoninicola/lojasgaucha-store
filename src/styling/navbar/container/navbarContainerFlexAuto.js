import * as React from "react"
import PropTypes from "prop-types"
import { FlexContainer } from "@layouts/index"

import { error } from "@utils"

const NavbarContainerFlexAuto = ({
  children,
  w,
  width,
  h,
  height,
  stretch,
  ...props
}) => {
  return (
    <FlexContainer as="nav" row stretchXM centerY wAuto hAuto {...props}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          stretch,
        })
      })}
    </FlexContainer>
  )
}

NavbarContainerFlexAuto.propTypes = {
  children: PropTypes.node.isRequired,
  w: (props, propName, componentName) => {
    if (props[propName]) {
      error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
      return
    }
  },
  width: (props, propName, componentName) => {
    if (props[propName]) {
      error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
      return
    }
  },
  h: (props, propName, componentName) => {
    if (props[propName]) {
      error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
      return
    }
  },
  height: (props, propName, componentName) => {
    if (props[propName]) {
      error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
      return
    }
  },
  stretch: (props, propName, componentName) => {
    if (props[propName] === undefined) {
      error(
        `${componentName}`,
        `The "${propName}" is not set. We reccommend you set the value to increase the space between each nav-item element`
      )
      return
    }
  },
}

export default NavbarContainerFlexAuto
