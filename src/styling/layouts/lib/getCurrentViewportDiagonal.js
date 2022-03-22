import { getCurrentWindowSize } from "@layouts/lib/index"
import layoutTheme from "../../_theme/layoutTheme/layoutTheme"

const _layoutTheme = layoutTheme()
const _minDiagonal = _layoutTheme?.viewport?.minDiagonal

export default function getCurrentViewportDiagonal() {
  const { width, height } = getCurrentWindowSize()

  const currentDiagonal = Math.round(Math.sqrt(width * width + height * height))

  //*
  //*   Managing highly customizable layout for specific screen-size
  //*   this affect the device used for the website layout (useViewportInfo)
  //*   This avoids displaying a highly customizable mobile layout in a desktop
  //*   when the user shrinks the browser window
  //*
  return { diagonal: currentDiagonal, minDiagonal: _minDiagonal }
}
