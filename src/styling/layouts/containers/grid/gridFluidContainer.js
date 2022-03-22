import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Grid from "./grid"

import { useResponsiveSize } from "@hooks"
import { isNotUndefined, warn } from "@utils/index"

/**
 *  Fluid Grid Container:
 *
 *  The grid will respond according to the viewport and it will be responsive in a specific breakpoint.
 *  Create as many columns as there are children inside this container
 *
 */

export const GridFluidBaseContainer = styled(motion.div)`
  ${Grid}
  grid-template-columns: ${({ theme, columns, cSize }) => {
    if (isNotUndefined(columns)) {
      warn(
        `GridFluidBaseContainer`,
        `You've passed the "columns" prop in a "Fluid Container", the value will be ignored. You would probably want to use a "Fixed Grid"`
      )
    }

    const responsiveGridColumns = theme?.layout?.grid?.responsive?.columns
    const minColumnsWidth =
      cSize ?? responsiveGridColumns.custom ?? responsiveGridColumns.default

    return `repeat(auto-fit, minmax(min(${useResponsiveSize(
      minColumnsWidth
    )}, 100%), 1fr))`
  }};
  grid-template-rows: ${({ theme, rows, rSize }) => {
    if (isNotUndefined(rows)) {
      warn(
        `GridFluidBaseContainer`,
        `You've passed the "rows" prop in a "Fluid Container", the value will be ignored. You would probably want to use a "Fixed Grid"`
      )
    }

    const responsiveGridRows = theme?.layout?.grid?.responsive?.rows
    const minRowsWidth =
      rSize ?? responsiveGridRows.custom ?? responsiveGridRows.default

    return `repeat(auto-fit, minmax(min(${useResponsiveSize(
      minRowsWidth
    )}, 100%), 1fr))`
  }}};

  ${props => props.$style ?? {}}
`

export const GridFluidContainer = ({ children, ...props }) => {
  return <GridFluidBaseContainer {...props}>{children}</GridFluidBaseContainer>
}
