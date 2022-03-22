// Thanks to https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

import { error } from "@utils"
import { isHEXColor } from "./index"

function hexToRgb(hex) {
  if (!isHEXColor(hex)) {
    return error(
      "hexToRgb()",
      `Parameter must be a color in HEX notation, instead of: ${hex}`
    )
  }

  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export default hexToRgb

// alert(hexToRgb("#0033ff").g) // "51";
// alert(hexToRgb("#03f").g) // "51";
