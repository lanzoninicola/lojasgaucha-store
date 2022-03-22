import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"

import { SVGIcon } from "@icons/index"
import { isNotUndefined } from "@utils"

const NavItemIcon = ({ icon, device, spotlighted, layout }) => {
  const themeContext = React.useContext(ThemeContext)
  const themeDeviceLayout = themeContext?.navbar?.layout[device].navItem
  const themeIconLayout = themeDeviceLayout?.icon

  const iconRenderedLayout = isNotUndefined(layout)
    ? layout?.icon
    : themeIconLayout

  return (
    <>
      <SVGIcon
        name={icon}
        size={iconRenderedLayout.size}
        color={
          spotlighted?.yesno === true
            ? iconRenderedLayout?.color?.spotligthed[spotlighted?.color]
            : iconRenderedLayout?.color?.default
        }
        mb="8"
      />
    </>
  )
}

NavItemIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  spotligthed: PropTypes.object,
  layout: PropTypes.object,
}

export default NavItemIcon
