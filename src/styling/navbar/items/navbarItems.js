/**
 *  This component returns only the content of a navbar.
 *  It requires a container to be rendered into the DOM
 */

import * as React from "react"
import { ThemeContext } from "styled-components"
import NavbarItem from "../item/navbarItem"
import {
  isObject,
  isUndefined,
  isNotUndefined,
  isFunction,
  isNotString,
  error,
} from "@utils/index"

const NavbarItems = ({
  module,
  device,
  layout, // if you want to pass a custom layout
  NavItemComponent,
  stretch,
  ...props
}) => {
  const themeContext = React.useContext(ThemeContext)
  if (themeContext?.navbar === undefined) {
    error(
      "NavbarItems",
      `The "Styled-components Theme" for the "navbar" module is missing`
    )
    return
  }

  const itemList = themeContext?.navbar?.navItems[device][module]

  if (itemList === undefined || itemList?.length === 0) {
    error(
      "NavbarItems",
      `No navitems was found for the module requested: "${module}".`
    )
    return
  }

  const renderComponent = () => {
    const isCustomNavItem = isNotUndefined(NavItemComponent)

    return itemList.map((item, index) => {
      const componentProps = {
        key: index,
        item: item,
        device: device,
        stretch: stretch,
        layout: layout,
      }

      if (isCustomNavItem)
        return <NavItemComponent {...componentProps} {...props} />

      return <NavbarItem {...componentProps} {...props} />
    })
  }

  return renderComponent()
}

NavbarItems.propTypes = {
  module: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      error(
        componentName,
        `The "${propName}" prop is required to identify the list of item to render inside the navbar for the specific website section. 
        That declaration is must included inside the "Navbar" Styled-component Theme (/styling/_theme/navbarTheme/navbarTheme.js - "navItems" property).`
      )
      return
    }
    if (isNotUndefined(props[propName]) && isNotString(props[propName])) {
      error(
        componentName,
        `The "${propName}" prop must be a string. Please, check the configuration inside the "Navbar" Styled-component Theme (/styling/_theme/navbarTheme/navbarTheme.js - "navItems" property).`
      )
      return
    }
  },
  device: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      error(
        componentName,
        `The "${propName}" prop is required. Please, passing a value choosing between: "mobile", "tablet", "laptop".`
      )
      return
    }
    if (isNotUndefined(props[propName]) && isNotString(props[propName])) {
      error(
        componentName,
        `The "${propName}" prop must be a string. Please, passing a value choosing between: "mobile", "tablet", "laptop".`
      )
      return
    }
  },
  NavItemComponent: (props, propName, componentName) => {
    // if (
    //   isUndefined(props[propName]) ||
    //   props[propName] === null ||
    //   !isFunction(props[propName])
    // ) {
    //   error(
    //     componentName,
    //     `The "${propName}" prop with type "React component" is required, that component renders the navbar.
    //   Example:
    //   <NavbarItems module="website" device="mobile" NavItemComponent={props => <NavbarItemMobile {...props} />}/>"`
    //   )
    //   return
    // }

    if (isNotUndefined(props[propName]) && !isFunction(props[propName])) {
      error(
        componentName,
        `${componentName} - The "${propName}" prop must be a React functional component.`
      )
      return
    }
  },
  // TODO: improve explanation of adding a personal layout for the icon and text of navItem component
  layout: (props, propName, componentName) => {
    if (isNotUndefined(props[propName]) && !isObject(props[propName])) {
      error(
        componentName,
        `The prop "${propName}" must be an object. It describes the colors, text size etc... of navItem component`
      )
      return
    }
  },
}

export default NavbarItems
