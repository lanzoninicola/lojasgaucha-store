import * as React from "react"
import PropTypes from "prop-types"

import { NavLink, NavDiv, NavModal, NavAnchor } from "@navigation/index"

import { isUndefined, isNotString, error } from "@utils"

const NavigationWrapper = ({ type, module, value, children }) => {
  if (type === "link") return <NavLink to={{ type, value }}>{children}</NavLink>

  if (type === "modal")
    return (
      <NavModal
        from={module}
        to={{ type, value }}
        renderOption={{ action: "toggle" }}
      >
        {children}
      </NavModal>
    )

  if (type === "anchor")
    return <NavAnchor to={{ type, value }}>{children}</NavAnchor>

  if (type === "component")
    return <NavDiv to={{ type, value }}>{children}</NavDiv>
}

NavigationWrapper.propTypes = {
  type: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" prop is required. This prop must be a string and its value could be: "link", "modal", "anchor", "component"`
      )
    }

    if (isNotString(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" prop must be a string, instead: ${typeof props[
          propName
        ]}`
      )
    }
  },
  module: (props, propName, componentName) => {
    if (props["type"] === "modal") {
      if (isUndefined(props[propName])) {
        return error(
          `${componentName}`,
          `"${propName}" prop is required. This prop must be a string and contains the information about which modal render and describe inside the "Overlay Theme" in "./theme/overlayTheme/overlayTheme.js"`
        )
      }

      if (isNotString(props[propName])) {
        return error(
          `${componentName}`,
          `"${propName}" prop must be a string, instead: ${typeof props[
            propName
          ]}`
        )
      }
    }
  },
  value: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" prop is required. This prop must be a string and its value could be:
            - a link: an internal URL of website (eg. "/product")
            - a React Component for the type "modal" 
            - anchor: an external link (eg. www.google.com)
            - a React Component for the type "component" 
            
        `
      )
    }

    if (isNotString(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" prop must be a string, instead: ${typeof props[
          propName
        ]}`
      )
    }
  },
  children: PropTypes.node.isRequired,
}

export default NavigationWrapper
