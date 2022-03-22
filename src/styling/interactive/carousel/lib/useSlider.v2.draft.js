import * as React from "react"
import { paginator, warn } from "@utils"
import usePagination from "./usePagination.draft"

function useSlider({ items = [], itemsPerPage = 1, device }) {
  if (items.length === 0) {
    warn(
      "useSlider",
      `You should provide array of items as first parameter of useSlider hook to render the carousel or slideshow`
    )
  }

  const { slideItemRef } = usePagination()
  const [pageData, setPageData] = React.useState()

  // prevPage: _renderedPage - 1 ? _renderedPage - 1 : null,
  // nextPage: totalPages > _renderedPage ? _renderedPage + 1 : null,

  function handlePrevPage() {
    const prevPage = pageData?.prevPage === null ? 1 : pageData?.prevPage
    setPageData(() => {
      const nextPageData = paginator({
        items,
        renderedPage: prevPage,
        itemsPerPage: pageData?.itemsPerPage,
        device,
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
        device,
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
