import * as React from "react"
import PropTypes from "prop-types"

import { FlexContainer } from "@layouts"
import { useViewportInfo } from "@hooks"

const CardsWrapper = ({ pl, pr, ml, mr, children, ...props }) => {
  const { width, device } = useViewportInfo()
  const paddingLeft = device === "mobile" ? "0" : pl
  const paddingRight = device === "mobile" ? "0" : pr
  const marginLeft = device === "mobile" ? "0" : ml
  const marginRight = device === "mobile" ? "0" : mr

  return (
    <FlexContainer
      row
      centerX
      h100
      bg="white"
      style={{
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
      }}
      // ml={marginLeft}
      // mr={marginRight}
      // pl={paddingLeft}
      // pr={paddingRight}
      pt={{
        laptop: props?.pt ?? 64,
        tablet: props?.pt ?? 64,
        mobile: props?.pt ?? 24,
      }}
      pb={{
        laptop: props?.pb ?? 64,
        tablet: props?.pb ?? 64,
        mobile: props?.pb ?? 24,
      }}
      {...props}
    >
      {children}
    </FlexContainer>
  )
}

export default CardsWrapper

CardsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
