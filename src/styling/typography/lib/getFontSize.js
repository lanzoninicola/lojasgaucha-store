import { isUndefined, isObject, isNumber, isString } from "@utils/index"

export default function getFontSize(userFontSize, themeFontSizes) {
  let _fontSize = 0
  // size is undefined --> size from theme
  if (isUndefined(userFontSize)) _fontSize = themeFontSizes
  // size is atomic with fixed size --> size from user
  if (isNumber(userFontSize) || isString(userFontSize)) _fontSize = userFontSize
  // size is atomic using a breakpoints object --> responsive size from user
  let nextDevicesFontSize = {}
  if (isObject(userFontSize)) {
    Object.keys(themeFontSizes).forEach(device => {
      nextDevicesFontSize = {
        ...nextDevicesFontSize,
        [device]: userFontSize[device] ?? themeFontSizes[device],
      }
    })
    _fontSize = nextDevicesFontSize
  }

  return _fontSize
}
