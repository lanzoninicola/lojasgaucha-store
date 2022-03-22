import { isUndefined, isObject, isNumber, isString } from "@utils/index"

// TODO manage +5 size

export default function getLineHeight(
  userLineHeight,
  userFontSize,
  themeLineHeights,
  themeFontSizes
) {
  let _lineHeight = 0

  // line-height is undefined --> line-height calculcation from theme or based on font-size
  if (isUndefined(userLineHeight)) {
    // size is undefined --> line-height from theme
    if (isUndefined(userFontSize)) {
      _lineHeight = themeLineHeights
    }

    // size is not undefined --> line-height based on atomic font-size
    if (isNumber(userFontSize) || isString(userFontSize))
      _lineHeight = parseInt(userFontSize) + 5

    // size is not undefined --> line-height based on font-size which is atomic using breakpoints(typeof object)
    let nextDevicesLineHeight = {}
    if (isObject(userFontSize)) {
      Object.keys(themeFontSizes).forEach(device => {
        const deviceLineHeight = userFontSize[device] ?? themeFontSizes[device]
        nextDevicesLineHeight = {
          ...nextDevicesLineHeight,
          [device]: parseInt(deviceLineHeight) + 5,
        }
      })
      _lineHeight = nextDevicesLineHeight
    }
  }

  if (isNumber(userLineHeight) || isString(userLineHeight))
    _lineHeight = parseInt(userLineHeight)

  // line-height is atomic using a breakpoints object --> line-height size from user
  let nextDevicesLineHeight = {}
  if (isObject(userLineHeight)) {
    Object.keys(themeLineHeights).forEach(device => {
      const deviceLineHeight =
        userLineHeight[device] ?? themeLineHeights[device]
      nextDevicesLineHeight = {
        ...nextDevicesLineHeight,
        [device]: parseInt(deviceLineHeight),
      }
    })
    _lineHeight = nextDevicesLineHeight
  }

  return _lineHeight
}
