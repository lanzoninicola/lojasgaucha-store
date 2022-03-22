import * as React from "react"
import PropTypes from "prop-types"
import { useViewportInfo } from "@hooks"
import { BlueLogo as BlueLogoDesktop } from "./variants/desktop/bluelogo"
import { OrangeLogo as OrangeLogoDesktop } from "./variants/desktop/orangelogo"
import { BlueLogo as BlueLogoMobile } from "./variants/mobile/bluelogo"
import { OrangeLogo as OrangeLogoMobile } from "./variants/mobile/orangelogo"

import { NavLink } from "@navigation/index"

const Logo = ({ variants }) => {
  const { device } = useViewportInfo()

  let RenderedLogo = null

  if (device !== "mobile") {
    if (variants === "primary") {
      RenderedLogo = <OrangeLogoDesktop />
    }

    if (variants === "secondary") {
      RenderedLogo = <BlueLogoDesktop />
    }
  }

  if (device === "mobile") {
    if (variants === "primary") {
      RenderedLogo = <OrangeLogoMobile />
    }

    if (variants === "secondary") {
      RenderedLogo = <BlueLogoMobile />
    }
  }

  return <NavLink to={{ type: "link", value: "/" }}>{RenderedLogo}</NavLink>
}

Logo.defaultProps = {
  variants: "primary",
}

Logo.propTypes = {
  variants: PropTypes.oneOf(["primary", "secondary"]),
}

export default Logo
