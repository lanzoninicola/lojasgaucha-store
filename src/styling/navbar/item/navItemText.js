import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"

import { SmallText } from "@typography/index"
import { isNotUndefined } from "@utils"

const NavItemText = ({ device, spotlighted, children, layout }) => {
  const themeContext = React.useContext(ThemeContext)
  const themeDeviceLayout = themeContext?.navbar?.layout[device].navItem
  const themeTextLayout = themeDeviceLayout?.text

  const textRenderedLayout = isNotUndefined(layout)
    ? layout?.text
    : themeTextLayout

  return (
    <>
      <SmallText
        weight="600"
        color={
          spotlighted?.yesno === true
            ? textRenderedLayout?.color?.spotligthed[spotlighted?.color]
            : textRenderedLayout?.color?.default
        }
        align="center"
        capitalize={textRenderedLayout?.capitalize}
      >
        {children}
      </SmallText>
    </>
  )
}

NavItemText.propTypes = {
  device: PropTypes.string.isRequired,
  spotligthed: PropTypes.object,
  layout: PropTypes.object,
}

export default NavItemText
