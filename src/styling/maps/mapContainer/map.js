import * as React from "react"
import PropTypes from "prop-types"
import { MapContainer, TileLayer } from "react-leaflet"

import { isDomAvailable } from "@utils/index"

//TODO: adding "store promo" in tooltip map

function Map({ center, zoom, children }) {
  if (!isDomAvailable) {
    return (
      <div>
        <p>Loading map...</p>
      </div>
    )
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      minZoom={1}
      maxZoom={18}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer
        attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}

Map.propTypes = {
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default Map
