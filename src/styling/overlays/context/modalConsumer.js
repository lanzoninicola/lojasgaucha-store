/**
 *  ModalConsumer dispatch below items to the modal caller:
 *  - the onClick event with the functions to show or toggle the modal
 *  - the Modal functional component to render by the ModalProvider
 *
 *  Each child component opens a specific Modal functional component,
 *  The Modal functional component is described inside the "modalsCatalog" object
 *  that is stored inside Styled Theme Context or passed via props
 *
 *  The "modalsCatalog"'s shape is:
 *  {
 *    moduleName<string>?modal_name?<string>: () => functionalComponent?<React.Component>
 *    moduleName<string>?modal_name?<string>: () => functionalComponent?<React.Component>
 *    ...
 *  }
 *
 */

import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"
import ModalContext from "./modalContext"
import useDeepCompareEffect from "use-deep-compare-effect"

const ModalConsumer = ({
  modalsCatalog,
  from,
  modal,
  renderOption = { action: "show" },
  children,
  ...props
}) => {
  // The styled-theme contains all the modals to render organized per modules from they are called
  const themeContext = React.useContext(ThemeContext)
  // I took the required functions from the context provider to dispatch the actions to the component that will calls the modal
  // the function to hide the modal is dispatched to the Modal functional component by the ModalProvider
  const { showModal, toggleModal } = React.useContext(ModalContext)
  // If the styled-theme doesn't exists I expect that user provided it via props
  modalsCatalog = modalsCatalog ?? themeContext?.modal?.modals
  // Below, the functional component that will renders the modal
  const modalComponent = modalsCatalog[from][modal]

  useDeepCompareEffect(() => {
    return () => {
      if (modal && modalsCatalog === undefined) {
        throw new Error("A modals catalog has not been defined")
      }

      if (
        typeof modal == "string" &&
        modalsCatalog[from][modal] === undefined
      ) {
        throw new Error(`No modal was found with the name provided: ${modal}`)
      }
    }
  }, [modalsCatalog, from, modal])

  // 2021-06-1 This component run in the manner I sat up now,
  // but if I move the component to the parent it is not run as expected

  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      onClick: () => {
        if (renderOption?.action === "show") {
          return showModal(modalComponent, from)
        }
        if (renderOption?.action === "toggle") {
          return toggleModal(modalComponent, from)
        }
      },
      showModal: () => showModal(modalComponent, from),
      toggleModal: () => toggleModal(modalComponent, from),
    })
  })
}

ModalConsumer.propTypes = {
  modalsCatalog: (props, propName, componentName) => {
    const modalsCatalogObject = props[propName]

    if (props[propName] !== undefined) {
      if (typeof props[propName] !== "object") {
        return new Error(
          `modalConsumer - PropTypes error: The prop "${propName}" supplied to "${componentName}" must be an object.`
        )
      }

      Object.values(modalsCatalogObject).forEach(modalValue => {
        if (typeof modalValue !== "function") {
          return new Error(
            `modalConsumer - PropTypes error: Invalid prop "${propName}" supplied to "${componentName}". The value of "${propName}" must be a function that returns a React Component`
          )
        }
      })
    }
  },
  modal: (props, propName, componentName) => {
    if (typeof props[propName] == "string" && props[propName] === undefined) {
      return new Error(
        `modalConsumer - PropTypes error: The prop "${propName}" supplied to "${componentName}" is required.`
      )
    }

    if (props[propName] !== undefined) {
      if (
        !typeof props[propName] === "string" ||
        !typeof props[propName] === "function"
      ) {
        return new Error(
          `modalConsumer - PropTypes error: The prop "${propName}" supplied to "${componentName}" must be a string. Instead of ${typeof props[
            propName
          ]}`
        )
      }
    }
  },
  renderOption: PropTypes.shape({
    action: PropTypes.string,
  }),
}

export default ModalConsumer
