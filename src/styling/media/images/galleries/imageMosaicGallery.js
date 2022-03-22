import * as React from "react"
import PropTypes from "prop-types"

import {
  GridMosaicContainer,
  GridMosaicCellWide,
  GridMosaicCellTall,
  GridMosaicCellBase,
} from "@layouts"
import { useViewportInfo } from "@hooks"
import { randomItemFromArray } from "@utils"

import { ImageQL } from "../index"
import mapGraphQLImageData from "../lib/mapGraphQLImageData"

const _gridCellWide = props => (
  <GridMosaicCellWide {...props}>{props?.children}</GridMosaicCellWide>
)
const _gridCellTall = props => (
  <GridMosaicCellTall {...props}>{props?.children}</GridMosaicCellTall>
)
const _gridCellBase = props => (
  <GridMosaicCellBase {...props}>{props?.children}</GridMosaicCellBase>
)

const ImageMosaicGallery = ({ data = {}, ...props }) => {
  const { device } = useViewportInfo()

  return (
    <GridMosaicContainer {...props}>
      {mapGraphQLImageData(data, device, (fluidData, index) => {
        const GridCellContainer = randomItemFromArray([
          _gridCellWide,
          _gridCellTall,
          _gridCellBase,
        ])

        return (
          <GridCellContainer key={index}>
            <ImageQL data={fluidData} />
          </GridCellContainer>
        )
      })}
    </GridMosaicContainer>
  )
}

ImageMosaicGallery.prototype = {
  data: PropTypes.object.isRequired,
}

export default ImageMosaicGallery
