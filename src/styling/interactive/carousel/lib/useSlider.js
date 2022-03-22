import * as React from "react"
import useViewportInfo from "../../../_hooks/useViewportInfo"
import { paginator, warn } from "@utils"

function useSlider({ items = [], itemsPerPage = 1 }) {
  if (items.length === 0) {
    warn(
      "useSlider",
      `You should provide array of items as first parameter of useSlider hook to render the carousel or slideshow`
    )
  }

  const slideItemRef = React.useRef(null)
  const { width, device } = useViewportInfo()
  const [pageData, setPageData] = React.useState(
    paginator({ items, itemsPerPage, device })
  )

  React.useEffect(() => {
    calculateNumberOfItemsPerPage()
  }, [width, calculateNumberOfItemsPerPage])

  const calculateNumberOfItemsPerPage = React.useCallback(() => {
    let _itemsPerPage = itemsPerPage
    if (slideItemRef.current) {
      _itemsPerPage = Math.floor(width / slideItemRef.current.offsetWidth)
    }
    setPageData(() => {
      const nextPageData = paginator({
        items,
        itemsPerPage: device === "mobile" ? 1 : _itemsPerPage,
      })
      return nextPageData
    })
  }, [width, device, items, itemsPerPage])

  function handlePrevPage() {
    const prevPage = pageData?.prevPage === null ? 1 : pageData?.prevPage
    setPageData(() => {
      const nextPageData = paginator({
        items,
        renderedPage: prevPage,
        itemsPerPage: pageData?.itemsPerPage,
      })
      return nextPageData
    })
  }

  function handleNextPage() {
    const nextPage = pageData?.nextPage === null ? 1 : pageData?.nextPage
    setPageData(() => {
      const nextPageData = paginator({
        items,
        renderedPage: nextPage,
        itemsPerPage: pageData?.itemsPerPage,
      })
      return nextPageData
    })
  }

  return {
    ...pageData,
    goNextPage: handleNextPage,
    goPrevPage: handlePrevPage,
    slideItemRef,
  }
}

export default useSlider
