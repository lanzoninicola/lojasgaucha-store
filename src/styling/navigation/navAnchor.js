/**
 *  This component used in a navbar let you fired events onClick.
 *  It is different from "NavLink" that will use the "Link" component by Gatsby
 *
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { motion } from "framer-motion"

const StyledNavAnchor = styled(motion.a)`
  text-decoration: none;
  cursor: pointer;
  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
`

const NavAnchor = ({ to, samePage, referrals, children }) => {
  const themeContext = React.useContext(ThemeContext)
  const framerMotion =
    themeContext?.navbar?.mobile?.layout?.effects?.framerMotion

  return (
    <>
      <StyledNavAnchor
        href={to?.value}
        target={samePage ? null : "_blank"}
        rel={`noopener ${referrals ? `` : `noreferrer`}`}
        variants={framerMotion}
        whileHover="hover"
        whileTap="tap"
      >
        {children}
      </StyledNavAnchor>
    </>
  )
}

NavAnchor.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavAnchor
