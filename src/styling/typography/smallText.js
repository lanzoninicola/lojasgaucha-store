import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import { useResponsiveSize } from "@hooks/index"
import { error } from "@utils/index"

import { getFontSize, getLineHeight } from "@typography/lib"

const SmallText = styled.div`
  ${Typeface}
  font-size: ${({ theme, variant, size, debug }) => {
    const themeVariant = theme.typography[variant]
    if (!themeVariant.hasOwnProperty("small")) {
      error(
        "SmallText - font-size",
        `Missing related font-size for the variant: "${variant}"`
      )
      return
    }

    const devicesFontSize = themeVariant?.small.fontSize
    const _fontSize = getFontSize(size, devicesFontSize)

    return useResponsiveSize(_fontSize, debug)
  }};
  line-height: ${({ theme, variant, size, lh }) => {
    const themeVariant = theme.typography[variant]
    if (!themeVariant.hasOwnProperty("small")) {
      error(
        "SmallText - line-height",
        `Missing related line-height for the variant: "${variant}"`
      )
      return
    }

    const deviceslineHeight = themeVariant?.small.lineHeight
    const devicesFontSize = themeVariant?.small.fontSize
    const _lineHeight = getLineHeight(
      lh,
      size,
      deviceslineHeight,
      devicesFontSize
    )

    return useResponsiveSize(_lineHeight)
  }};
  ${props => props.$style ?? {}}
`

SmallText.defaultProps = {
  variant: "secondary",
  weight: "400",
  color: "#000000",
}

SmallText.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
}

export default SmallText
