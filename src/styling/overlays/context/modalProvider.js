import * as React from "react"
import ModalContext from "./modalContext"

/**
 *
 *  ModalProvider render the Modal functional component
 *  provided by a component caller that is wrapped by the ModalConsumer component.
 *
 *  Dispatch also the following props:
 *  - index of Modal located in the store
 *  - hideModal function
 *
 */

let ModalProvider = ({ children }) => {
  // The "modals" state object tracked the modals component showed in the UI
  const [modalKey, setKey] = React.useState(0)
  const [modals, setModals] = React.useState({})
  const [modalsQueue, setModalsQueue] = React.useState([])

  React.useEffect(() => {
    return () => closeAllModals
  })

  function generateNewModalKey() {
    setKey(() => {
      let newModalKey = modalKey
      return ++newModalKey
    })
  }

  function addModalToQueue(key, moduleFrom) {
    setModalsQueue(modalsQueue => {
      let nextModalsQueue = [...modalsQueue]
      const modalItem = { [key]: moduleFrom }
      nextModalsQueue.push(modalItem)
      return nextModalsQueue
    })
  }

  function removeModalFromQueue(key) {
    setModalsQueue(modalsQueue => {
      let nextModalsQueue = [...modalsQueue]

      let arrIndex = null
      nextModalsQueue.forEach((nextModal, index) => {
        if (key === Object.keys(nextModal)[0]) {
          arrIndex = index
        }
      })

      if (arrIndex != null) {
        nextModalsQueue.splice(arrIndex, 1)
      }

      return nextModalsQueue
    })
  }

  function removeAllModalsFromQueue() {
    setModalsQueue(modalsQueue => {
      let nextModalsQueue = [...modalsQueue]
      nextModalsQueue = []
      return nextModalsQueue
    })
  }

  function isModalShown(modal) {
    return (
      Object.values(modals).filter(
        modalComponentState => modalComponentState === modal
      ).length !== 0
    )
  }

  const showModal = (modalComponent, moduleFrom) => {
    if (modalComponent === undefined) {
      return new Error(
        `showModal() function - modalComponent parameter is undefined`
      )
    }

    if (typeof modalComponent !== "function") {
      return new Error(
        `showModal() function - modalComponent paramater must be function instead of ${typeof modalComponent}`
      )
    }

    if (!isModalShown(modalComponent)) {
      generateNewModalKey()
      setModals(modals => {
        let nextModals = { ...modals, [modalKey]: modalComponent }
        return nextModals
      })
      addModalToQueue(modalKey, moduleFrom)
    }
  }

  const hideModal = key => {
    setModals(modals => {
      if (!modals[key]) {
        return modals
      }
      const nextModals = { ...modals }
      delete nextModals[key]
      return nextModals
    })
    removeModalFromQueue(key)
  }

  const closeAllModals = () => {
    setModals(() => {
      const nextModals = {}
      return nextModals
    })

    removeAllModalsFromQueue()
  }

  const toggleModal = (modalComponent, moduleFrom) => {
    if (!isModalShown(modalComponent)) {
      showModal(modalComponent, moduleFrom)
    }

    const lastModalOpened = modalsQueue[modalsQueue.length - 1]

    if (lastModalOpened !== undefined) {
      const modalKey = Object.keys(lastModalOpened)[0]
      hideModal(modalKey)
    }
  }

  // Update data to store inside the context
  const contextValue = {
    showModal,
    hideModal,
    toggleModal,
    modalsQueue,
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <>
        {Object.keys(modals).map(modalKey => {
          const ModalRendered = modals[modalKey]
          return (
            <ModalRendered
              key={modalKey}
              modalKey={modalKey}
              hideModal={() => hideModal(modalKey)}
            />
          )
        })}
      </>
    </ModalContext.Provider>
  )
}

export default ModalProvider
