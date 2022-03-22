import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

// import { motion } from "framer-motion"
import { colorTheme } from "@colors/lib"
import { Margins, Paddings, Size } from "@layouts/index"
import { ImageTitle, ImageQL } from "@images/index"
// import {SVGIcon} from "@icons/index"

const StyledImageCard = styled.div`
  ${Margins}
  ${Paddings}
  ${Size}
  position: relative;
  background: ${({ card }) => {
    if (card?.bg) return colorTheme(card?.bg)
    return null
  }};
  border-radius: ${({ card }) => {
    if (card?.br) return card?.br
    return null
  }};
  ${({ $style }) => $style ?? {}}
`

const ImageCard = ({
  card = { bg: null, br: null },
  image = { fluid: null },
  imageLabel = {
    text: null,
    color: null,
    uppercase: false,
    lowercase: false,
    bg: null,
    opacity: null,
    style: {},
  },
  ...props
}) => {
  return (
    // <FlexContainer column centerX stretchY h100 w100>
    <StyledImageCard h100 w100 card={card} {...props}>
      <ImageQL
        data={image?.fluid}
        wrapperStyle={{
          borderRadius: card?.br ?? null,
        }}
        ignoreAlt
        ignoreTitle
      />
      <ImageTitle
        bottomCenter
        text={imageLabel?.text}
        color={imageLabel?.color}
        uppercase={imageLabel?.uppercase}
        lowercase={imageLabel?.lowercase}
        bg={
          imageLabel?.bg
            ? colorTheme(imageLabel?.bg, {
                colorUnit: "rgba",
                opacity: imageLabel?.opacity ?? 1,
              })
            : null
        }
        style={imageLabel?.style}
      >
        {/* 
          
          TODO: adding option to add an icon to image label
          
          <SVGIcon
            name="ARROW_RIGHT"
            size="24"
            color="white"
            pl="8"
          /> */}
      </ImageTitle>
    </StyledImageCard>
    // </FlexContainer>
  )
}

export default ImageCard
