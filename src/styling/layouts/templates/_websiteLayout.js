import * as React from "react"
import PropTypes from "prop-types"

import { PancakeLayout } from "@templates/index"
// import Header from "../../../components/header/header"
// import Footer from "../../../components/footer/footer"

const WebsiteLayout = ({ children }) => {
  const pageLayoutRef = React.useRef(null)

  return (
    <>
      <PancakeLayout gap="0" ref={pageLayoutRef}>
        {/* <Header /> */}

        {children}
        {/* <Footer /> */}
      </PancakeLayout>
    </>
  )
}

WebsiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebsiteLayout
