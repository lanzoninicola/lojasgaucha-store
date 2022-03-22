import { isObject, isNumber, isString } from "@utils/index"

export default function getIconSize(userIconSize, currentDevice) {
  let _iconSize = 0

  // size is atomic with fixed size --> size from user
  if (isNumber(userIconSize) || isString(userIconSize)) _iconSize = userIconSize

  if (isObject(userIconSize)) {
    _iconSize = userIconSize?.[currentDevice]
  }

  return _iconSize
}
