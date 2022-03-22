import * as React from "react"
import styled from "styled-components"
import Grid from "./grid"

import { useResponsiveSize } from "@hooks"
import { parseGridTemplateValues } from "@layouts/lib/index"
import { isUndefined, isNotString, warn, error } from "@utils/index"

/**
 *  Fluid Grid Container:
 *
 *  The grid will respond according to the viewport and it will be responsive in a specific breakpoint.
 *  Create as many columns as there are children inside this container
 *
 */

export const GridMosaicBaseContainer = styled.div`
  ${Grid}
  grid-template-columns: ${({ columns, cAuto }) => {
    if (isUndefined(columns)) {
      return error(
        `GridMosaicBaseContainer`,
        `"columns" prop is missing: ${typeof columns}. You must passing the "columns" prop in a "Mosaic Grid Container"`
      )
    }

    if (isNotString(columns)) {
      return error(
        `GridMosaicBaseContainer`,
        `"columns" prop must be a string, instead: "${typeof columns}"`
      )
    }

    if (cAuto) {
      warn(
        "GridMosaicBaseContainer",
        `In a mosaic container you have to define the numbers of columns. This prop will be ignored.`
      )
    }

    return parseGridTemplateValues(columns)
  }};
  grid-auto-rows: ${({ rHeight }) => {
    if (typeof rHeight === "boolean") return `minmax(min-content, max-content)`
    if (rHeight) return useResponsiveSize(rHeight)

    if (isUndefined) {
      warn(
        "GridMosaicBaseContainer",
        `We will recommend you passing a value for "rHeight" prop to define the height of rows, otherwise the cells height will depend upon of its children height`
      )
    }

    return null
  }};
  grid-auto-flow: dense;

  ${props => props.$style ?? {}}
`

const StyledGridMosaicCellWide = styled.div`
  grid-column: ${({ cSpan }) => {
    const defaultSpan = 2
    if (cSpan) return `span ${cSpan}`

    return `span ${defaultSpan}`
  }};
`

const StyledGridMosaicCellTall = styled.div`
  grid-row: ${({ rSpan }) => {
    const defaultSpan = 2
    if (rSpan) return `span ${rSpan}`

    return `span ${defaultSpan}`
  }};
`

const GridMosaicContainer = ({ children, ...props }) => {
  return (
    <GridMosaicBaseContainer {...props}>{children}</GridMosaicBaseContainer>
  )
}

const GridMosaicCellWide = ({ children, ...props }) => {
  return (
    <StyledGridMosaicCellWide {...props}>{children}</StyledGridMosaicCellWide>
  )
}

const GridMosaicCellTall = ({ children, ...props }) => {
  return (
    <StyledGridMosaicCellTall {...props}>{children}</StyledGridMosaicCellTall>
  )
}

const GridMosaicCellBase = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

export {
  GridMosaicContainer,
  GridMosaicCellWide,
  GridMosaicCellTall,
  GridMosaicCellBase,
}
