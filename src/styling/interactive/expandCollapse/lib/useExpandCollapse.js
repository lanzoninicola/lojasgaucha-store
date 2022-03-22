import * as React from "react"
import ExpandedIcon from "../expandedIcon"

import { isNotArray, error } from "@utils"

const useExpandCollapse = content => {
  if (isNotArray(content)) {
    error(
      `useExpandCollapse`,
      `The parameter must be an array, instead of: ${typeof content}`
    )
  }

  const [contentCollapsible, setContentCollapsible] = React.useState(content)

  function expandContent(contentId) {
    setContentCollapsible(() => {
      let nextContentRendered = [...contentCollapsible]
      let isContentExpanded = nextContentRendered[contentId]?.expanded
      nextContentRendered[contentId].expanded = !isContentExpanded
      return nextContentRendered
    })
  }

  console.log(contentCollapsible)

  return {
    contentCollapsible,
    expandContent,
    ExpandedIcon,
  }
}

export default useExpandCollapse
