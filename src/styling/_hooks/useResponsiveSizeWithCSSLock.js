import * as React from "react"
import { ThemeContext } from "styled-components"

import { useViewportInfo } from "@hooks/index"

//TODO using combineCSSValues function to cover also other units, not only PX

export default function useResponsiveSize(
  { min = 0, max = 0 },
  options = { unit: "px", debug: { fired: false, message: "" } }
) {
  const { width } = useViewportInfo()
  const themeContext = React.useContext(ThemeContext)
  // const minAspectRatio = 1.78 // Aspect Ratio of iPhone 5 320w 568h
  // const currentAspecRatio = (height / width).toFixed(2)

  let resultSize = 0

  if (width <= themeContext.breakpoints.small.width) {
    resultSize = `${parseInt(min)}${options.unit ? options.unit : ""}`
    return resultSize
  }

  if (parseInt(width) > parseInt(themeContext.breakpoints.xlarge.width)) {
    resultSize = `${parseInt(max)}${options.unit ? options.unit : ""}`
    return resultSize
  }

  // Using CSS Locks tecnique
  // https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
  // https://fvsch.com/css-locks

  // Original rule
  // font-size: calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ( (100vw - ${minVewportWidth}px) / (${maxVewportWidth} - ${minVewportWidth}) ));
  // @media only screen and (max-width: ${minVewportWidth}px) { font-size: ${minFontSize}px; };
  // @media only screen and (min-width: ${maxVewportWidth}px) { font-size: ${maxFontSize}px; };

  // the "100vw" has been substituted with the width value calculated by the "useViewportInfo" hook

  // this function returns the pixel value of css property
  resultSize = `${
    parseInt(min) +
    (parseInt(max) - parseInt(min)) *
      (
        (parseInt(width) - parseInt(themeContext.breakpoints.small.width)) /
        (parseInt(themeContext.breakpoints.xlarge.width) -
          parseInt(themeContext.breakpoints.small.width))
      ).toFixed(2)
  }${options.unit ? options.unit : ""}`

  // Needs to improve the debug listner (adding to :after the div the message for example)
  // console.table is fired despite the condition you set

  // if (options?.debug?.fired === true) {

  // console.table({
  //   minFontSize: parseInt(min),
  //   maxFontSize: parseInt(max),
  //   unit: options.unit,
  //   debugMessage: options?.debug?.message,
  //   width: parseInt(width),
  //   themeSmallWidth: parseInt(themeContext.breakpoints.small.width),
  //   themeXLargeWidth: parseInt(themeContext.breakpoints.xlarge.width),
  //   result: result,
  // })
  // }

  return resultSize
}
