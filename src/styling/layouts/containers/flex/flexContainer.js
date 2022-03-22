import * as React from "react"
import Flex from "./flex"

const FlexContainer = React.forwardRef(({ children, ...props }, ref) => {
  /**
  This is not always true

  if (props?.centerX && isUndefined(props?.h100)) {
      warn(
        "FlexContainer",
        '"centerX" prop requires also "h100" prop for flex container'
      )
  }

  if (props?.centerY && isUndefined(props?.w100) {
      warn(
        "FlexContainer",
        '"centerY" prop requires also "w100" prop for flex container'
      )
  }
 */

  return (
    <>
      <Flex ref={ref} {...props}>
        {children}
      </Flex>
    </>
  )
})

export default FlexContainer
