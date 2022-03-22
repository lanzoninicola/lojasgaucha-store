import * as React from "react"

let DOMElementsInfoState = {}

const DOMElementsInfoStore = () => {
  const exec = action => {
    if (action.type === "ADDING_NODE_INFO") {
      let newDOMElementInfoState = { ...DOMElementsInfoState }
      newDOMElementInfoState = {
        ...newDOMElementInfoState,
        [action.payload.nodeId]: {
          height: action.payload.nodeHeight,
          width: action.payload.nodeWidth,
        },
      }

      DOMElementsInfoState = { ...newDOMElementInfoState }
    }

    if (action.type === "REMOVE_NODE_INFO") {
      let newDOMElementInfoState = { ...DOMElementsInfoState }
      delete newDOMElementInfoState[action.payload.nodeId]
      DOMElementsInfoState = { ...newDOMElementInfoState }
    }
  }

  return {
    dispatch: action => exec(action),
    getStore: () => DOMElementsInfoState,
  }
}

/**
 *  useDOMInfo is an hook that let you grab the information of DOM Object
 *  and store inside the global state.
 *  It's possibile to read the information of global stare with the "useDOMInfoStore" hook
 *  and passing the information to a React component.
 *
 *  Requirements: it requires the ref  and an "id" of node to inspect
 *
 *  const ref = useDOMInfo()
 *  <div ref={ref} id="heroSection">{children}</div>
 *
 *  const DOMInfoStore<object> = useDOMInfoStore()
 *
 */

export const useDOMInfo = () => {
  const ref = React.useRef()

  React.useEffect(() => {
    const refNode = ref.current
    if (refNode?.id) {
      const nodeId = refNode.id
      const nodeHeight = refNode.offsetHeight ?? null
      const nodeWidth = refNode.offsetWidth ?? null

      DOMElementsInfoStore().dispatch({
        type: "ADDING_NODE_INFO",
        payload: {
          nodeId,
          nodeHeight,
          nodeWidth,
        },
      })
    }

    return () => {
      if (refNode?.id) {
        const nodeId = refNode.id

        DOMElementsInfoStore().dispatch({
          type: "REMOVE_NODE_INFO",
          payload: nodeId,
        })
      }
    }
  }, [])

  return ref
}

// here there is an issue

export const useDOMInfoStore = () => {
  const [DOMStyleInfo, setDOMStyleInfo] = React.useState({})

  React.useEffect(() => {
    const styles = DOMElementsInfoStore().getStore()

    setDOMStyleInfo(styles)
  }, [])

  return DOMStyleInfo
}
