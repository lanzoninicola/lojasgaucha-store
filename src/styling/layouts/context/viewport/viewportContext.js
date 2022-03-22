import * as React from "react"

const ViewportContext = React.createContext({
  device: "mobile",
  size: 0,
  height: 0,
  width: 0,
  diagonal: 0,
})

export default ViewportContext
