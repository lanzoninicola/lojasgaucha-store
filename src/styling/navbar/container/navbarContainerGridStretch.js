import * as React from "react"
import PropTypes from "prop-types"
import { GridFixedContainer } from "@layouts/index"

import { isUndefined, error } from "@utils"

/**
 *    Unlike the "navbarContainerFlexStretch" component
 *    this let you more controls of space between the children elements
 */

const NavbarContainerGridStretch = ({
  children,
  w,
  width,
  w100,
  w100v,
  wAuto,
  h,
  height,
  h100,
  h100v,
  hAuto,
  columns,
  ...props
}) => {
  let nextComponentProps = { ...props }

  if (w) delete nextComponentProps["w"]
  if (width) delete nextComponentProps["width"]
  if (w100) delete nextComponentProps["w100"]
  if (w100v) delete nextComponentProps["w100v"]
  if (wAuto) delete nextComponentProps["wAuto"]

  const _height = h ?? height ?? h100 ?? h100v ?? hAuto
  if (isUndefined(_height)) {
    return error(
      `NavbarContainerGridStretch`,
      `You must define a value for the height of the element`
    )
  }

  return (
    <GridFixedContainer
      as="nav"
      w100
      rAuto
      columns={columns}
      {...nextComponentProps}
    >
      {children}
    </GridFixedContainer>
  )
}

NavbarContainerGridStretch.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string.isRequired,
  w: (props, propName, componentName) => {
    if (props[propName]) {
      return error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  width: (props, propName, componentName) => {
    if (props[propName]) {
      return error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  w100: (props, propName, componentName) => {
    if (props[propName]) {
      return error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  w100v: (props, propName, componentName) => {
    if (props[propName]) {
      return error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  wAuto: (props, propName, componentName) => {
    if (props[propName]) {
      return error(
        `${componentName}`,
        `A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  // h: (props, propName, componentName) => {
  //   if (
  //     (props[propName] === undefined || props[propName] === null) &&
  //     !props["height"]
  //   ) {
  //     error(
  //       `${componentName}`,
  //       `The "${propName}" prop value is missing.

  //       You must define a value for the height of the element`
  //     )
  //     return
  //   }
  // },
  // height: (props, propName, componentName) => {
  //   if (
  //     (props[propName] === undefined || props[propName] === null) &&
  //     !props["h"]
  //   ) {
  //     error(
  //       `${componentName}`,
  //       `The "${propName}" prop value is missing.

  //       You must define a value for the height of the element`
  //     )
  //     return
  //   }
  // },
}

export default NavbarContainerGridStretch
