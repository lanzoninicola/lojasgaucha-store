import * as React from "react";
import PropTypes from "prop-types";

import { WebsiteLayout } from "../styling/layouts/templates/index";

// import DOMViewportInfo from "@layouts/lib"

const Layout = ({ children }) => {
  return <WebsiteLayout>{children}</WebsiteLayout>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
