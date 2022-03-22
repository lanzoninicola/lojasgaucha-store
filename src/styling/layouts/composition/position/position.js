import { css } from "styled-components"
import { isBoolean, isUndefined, isNotUndefined, warn } from "@utils"

const Position = css`
  position: ${({
    relative,
    absolute,
    fixed,
    sticky,
    h,
    height,
    h100,
    h100v,
    hAuto,
    hFixed,
  }) => {
    if (relative) return `relative`
    if (absolute) return `absolute`
    if (fixed) return `fixed`
    if (sticky) {
      if (
        (isNotUndefined(h) ||
          isNotUndefined(height) ||
          isNotUndefined(h100) ||
          isNotUndefined(h100v) ||
          isNotUndefined(hAuto)) &&
        isUndefined(hFixed)
      ) {
        warn(
          "Position",
          'You have selected "position: sticky", I recommend you use the "hFixed" prop in the container'
        )
      }
      return `sticky`
    }

    return `relative`
  }};
  top: ${({ top, sticky }) => {
    if (top) return top
    if (isBoolean(sticky)) {
      return 0
    } else return sticky
  }};
  bottom: ${({ bottom }) => {
    if (bottom) return bottom

    return null
  }};
  left: ${({ left }) => {
    if (left) return left

    return null
  }};
  right: ${({ right }) => {
    if (right) return right

    return null
  }};
  ${props => props.$style ?? {}}
`

export default Position
