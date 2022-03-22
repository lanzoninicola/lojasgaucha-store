import * as React from "react"

/**
 * Inspired by https://github.com/mpontus/react-modal-hook
 *
 * Context initialization with the two functions to show and hide the modals
 */

const ModalContext = React.createContext({
  showModal: () => {},
  hideModal: () => {},
  toggleModal: () => {},
  modalsQueue: [],
  isShown: false,
})

export default ModalContext
