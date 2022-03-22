import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import { ThemeContext } from "styled-components"

import { Link } from "gatsby"

/**
 * This component let you navigate through the website page
 * 
 * Props:
 * 
 * to: {
            type: "link",
            value: "/ambientes",
          },
*/

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

const NavLink = ({ to, children }) => {
  // const themeContext = React.useContext(ThemeContext)
  // const framerMotion =
  //   themeContext?.navbar?.mobile?.layout?.effects?.framerMotion

  return (
    <StyledLink
      to={to?.value}
      // variants={framerMotion}
      // whileHover="hover"
      // whileTap="tap"
    >
      {children}
    </StyledLink>
  )
}

NavLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavLink
