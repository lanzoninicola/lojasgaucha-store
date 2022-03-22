import * as React from "react"
import { NavbarContainerFlexAuto, NavbarItems } from "@navbar/index"

const MapAppsNavbar = props => {
  return (
    <NavbarContainerFlexAuto {...props}>
      <NavbarItems module="maps" {...props} />
    </NavbarContainerFlexAuto>
  )
}

export default MapAppsNavbar
