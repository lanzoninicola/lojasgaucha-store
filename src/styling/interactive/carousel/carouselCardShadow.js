import * as React from "react"
// import { ThemeContext } from "styled-components"
import { FlexContainer } from "@layouts/index"

function CarouselCardShadow({ ...props }) {
  // const themeContext = React.useContext(ThemeContext)

  // // const layoutCard =
  // //   themeContext?.layout?.style?.carousel?.hero_carousel?.card?.default

  return (
    <FlexContainer hAuto centerX centerY pl="30" pr="30" h="30%" {...props}>
      <svg
        width={"100%"}
        height={34}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx={154.889}
          cy={17}
          rx={154.889}
          ry={17}
          fill="url(#prefix__paint0_linear)"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={57.611}
            y1={34}
            x2={337.167}
            y2={17}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7E7E9" />
            <stop offset={1} stopColor="#E7E7E9" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </FlexContainer>
  )
}

export default CarouselCardShadow
