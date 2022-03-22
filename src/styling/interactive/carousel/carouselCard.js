import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { motion } from "framer-motion"
import { useViewportInfo } from "@hooks"
import { isColorTheme, colorTheme } from "@colors/lib"
import { FlexContainer, Margins, Paddings, Size } from "@layouts/index"

// TODO: view if this component can be replaced by "ImageCard" component

const StyledCardWrapper = styled.div`
  ${Margins}
  ${Paddings}
  ${Size}
  box-sizing: border-box;
  position: relative;
  border-radius: ${({ br }) => {
    if (br) return br

    return `25px`
  }};
  background: ${({ bg }) => {
    if (bg) {
      if (isColorTheme(bg)) return colorTheme(bg)
      return bg
    }
    return `white`
  }};
  scroll-snap-align: center;
  ${({ $style }) => $style ?? {}}
`

const CarouselCard = ({ gap, children, ...props }) => {
  const { device } = useViewportInfo()

  console.log(gap)

  return (
    <FlexContainer
      column
      centerX
      stretchY
      // $style={{ minWidth: device === "mobile" ? "100%" : null }}
      $style={{ minWidth: "100%" }}
      bg="red"
    >
      <StyledCardWrapper
        mr={{
          laptop: gap ?? 24,
          tablet: gap ?? 24,
          mobile: 24,
        }}
        ml={{
          laptop: gap ?? 24,
          tablet: gap ?? 24,
          mobile: 24,
        }}
        p="20 30 20 30"
        {...props}
      >
        {children}
      </StyledCardWrapper>
    </FlexContainer>
  )
}
export default CarouselCard

CarouselCard.propTypes = {
  children: PropTypes.node.isRequired,
}
