import * as React from "react"
import { ThemeContext } from "styled-components"
import { Tooltip } from "react-leaflet"

import CompanyTooltip from "../markerTooltips/companyTooltip"
import MapMarker from "./mapMarker"

// TODO: manage company multiple addresses
// TODO: passing adress data to CompanyTooltip

function CompanyMarker() {
  const themeContext = React.useContext(ThemeContext)
  const companyInfo = themeContext?.company
  const { maps, shortName, description } = companyInfo
  const companyCoordinates = [maps?.latitude, maps?.longitude]

  return (
    <MapMarker
      position={companyCoordinates}
      title={shortName}
      text={description}
    >
      <Tooltip direction="top">
        <CompanyTooltip shortName={shortName} />
      </Tooltip>
    </MapMarker>
  )
}

export default CompanyMarker
