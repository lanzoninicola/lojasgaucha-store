import * as React from "react"

import { FlexContainer } from "@layouts"
import { SVGIcon } from "@icons"

export const CarouselChevron = ({ page, goPrevPage, goNextPage }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
      }}
    >
      <FlexContainer row h100 centerY stretchXL>
        <div onClick={goPrevPage}>
          {page > 1 && <SVGIcon name="CHEVRON_LEFT" size="24" />}
        </div>
        <div onClick={goNextPage}>
          <SVGIcon name="CHEVRON_RIGHT" size="24" />
        </div>
      </FlexContainer>
    </div>
  )
}

export default CarouselChevron
