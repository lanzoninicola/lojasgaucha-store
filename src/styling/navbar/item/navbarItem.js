import * as React from "react"
import PropTypes from "prop-types"

import { FlexContainer } from "@layouts/index"

import NavItemIcon from "./navItemIcon"
import NavItemText from "./navItemText"

import { NavigationWrapper } from "@navigation"
import { error } from "@utils"

const NavbarItem = ({ item, layout, device, stretch, hideIcon, hideText }) => {
  const { type, module, value } = item?.to

  return (
    <NavigationWrapper type={type} module={module} value={value}>
      <FlexContainer
        column
        centerY
        centerX
        h100
        ml={stretch ?? null}
        mr={stretch ?? null}
      >
        {!hideIcon && (
          <NavItemIcon
            icon={item.icon}
            device={device}
            spotlighted={item.spotlighted}
            layout={layout}
          />
        )}
        {!hideText && (
          <NavItemText
            device={device}
            spotlighted={item.spotlighted}
            layout={layout}
          >
            {item.text}
          </NavItemText>
        )}
      </FlexContainer>
    </NavigationWrapper>
  )
}

NavbarItem.propTypes = {
  item: (props, propName, componentName) => {
    // icon: "ALERT_TRIANGLE", text: "Porque nós", to: {…}, spotlighted: {…}

    if (!props[propName].hasOwnProperty("icon")) {
      return error(
        `${componentName}`,
        `
        Prop "${propName}" must be an object with a property called "icon" . 
        
        The "icon" property contains the name of icon (from /iconsTheme.js) to render
        
        `
      )
    }

    if (!props[propName].hasOwnProperty("text")) {
      return error(
        `${componentName}`,
        `
        Prop "${propName}" must be an object with a property called "text" . 
        
        The "text" property contains the text to render at the bottom of the icon.
        
        `
      )
    }

    if (!props[propName].hasOwnProperty("to")) {
      return error(
        `${componentName}`,
        `
        Prop "${propName}" must be an object with a property called "to" . 
        
        The "to" property is an object that contains the info for routing {type: "link", module: "navbarMobile", value: "/product"}.
        
        `
      )
    }

    if (!props[propName]["to"].hasOwnProperty("type")) {
      return error(
        `${componentName}`,
        `
        Prop "${propName}" must be an object with a property called "type" . 
        
        The "type" property must be a string and its value could be:
        - link
        - modal
        - anchor
        - component
        
        `
      )
    }

    if (!props[propName]["to"].hasOwnProperty("value")) {
      return error(
        `${componentName}`,
        `
        Prop "${propName}" must be an object with a property called "value" . 
        
        The "value" property must be a string and its value could be:
        - a link: an internal URL of website (eg. "/product")
        - a React Component for the type "modal" 
        - anchor: an external link (eg. www.google.com)
        - a React Component for the type "component" 
        
        `
      )
    }

    if (!props[propName].hasOwnProperty("spotlighted")) {
      return error(
        `${componentName}`,
        `
        Prop "${propName}" must be an object with a property called "spotlighted". 
        
        The "spotlighted" is a string and defines the color of icon and text of nav-item if you want to emphasize.
        
        `
      )
    }
  },
  hideIcon: PropTypes.bool,
  hideText: PropTypes.bool,
  layout: PropTypes.object,
  device: PropTypes.string,
}

export default NavbarItem
