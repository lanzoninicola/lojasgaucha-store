import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"

import { useViewportInfo } from "@hooks"
import { GridFixedContainer } from "@layouts/index"
import CloseModalButton from "./closeModalButton"

// background: linear-gradient(
//   180deg,
//   #091e5f 82%,
//   rgba(9, 30, 95, 0) 89%,
//   #fefefe 100%
// );

const StyledBottomSheet = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  top: 0px;

  background: ${({ theme }) => theme.modal.layout.bottomsheet.background};

  width: ${({ vw }) => `${vw}px`};
  height: ${({ vh }) => `${vh}px`};
  padding: 20px 16px 70px 16px;

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  transform: ${({ vh }) => `translateY(${vh}px)`};
  z-index: 20;
`

const BottomSheet = ({ modalKey, hideModal, children }) => {
  const { width, height } = useViewportInfo()

  return (
    <>
      <StyledBottomSheet
        vh={height}
        vw={width}
        // initial={{ y: "100%" }}
        initial={{ y: "100%" }}
        // animate={{ y: "5%"}}
        animate={{ y: "0%" }}
        // transition={{ ease: "easeOut", duration: 0.9 }}
        transition={{
          // On Tap - Navigation
          type: "spring",
          delay: 0,
          stiffness: 350,
          damping: 70,
          mass: 1,
        }}
      >
        <GridFixedContainer
          id="bottomSheet"
          gap="16px"
          columns="1fr"
          rAuto
          h100
        >
          {/* <FlexContainer id="bottomSheet" column w100 stretchXM> */}
          {children}

          {/* TODO: verify to make the component below indipendent */}
          <CloseModalButton modalKey={modalKey} hideModal={hideModal} />
          {/* </FlexContainer> */}
        </GridFixedContainer>
      </StyledBottomSheet>
    </>
  )
}

BottomSheet.propTypes = {
  status: PropTypes.string,
}

export default BottomSheet
