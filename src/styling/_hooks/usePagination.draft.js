// import * as React from "react"
// import { useViewportInfo } from "@hooks"
// import { paginator, warn } from "@utils"

// function usePagination({ items = [], currentPage = 1, itemsPerPage = 1 }) {
//   const slideItemRef = React.useRef(null)
//   const { width, device } = useViewportInfo()
//   const [responsiveItemsPerPage, setResponsiveItemsPerPage] = React.useState(
//     itemsPerPage
//   )
//   const [paginationData, setPaginationData] = React.useState({})

//   const getItemsPerPage = React.useCallback(() => {
//     const _itemsPerPage =
//       device === "mobile" ? 1 : Math.floor(width / slideItemRef.clientWidth)
//     setResponsiveItemsPerPage(_itemsPerPage)
//   }, [width, slideItemRef.clientWidth])

//   const getPageData = React.useCallback(() => {
//     const _currentPage = currentPage
//     const offset = (_currentPage - 1) * responsiveItemsPerPage
//     const paginatedItems = items.slice(offset).slice(0, responsiveItemsPerPage)
//     const totalPages = Math.ceil(items.length / responsiveItemsPerPage)

//     setPaginationData({
//       page: currentPage,
//       itemsPerPage: responsiveItemsPerPage,
//       total: items.length,
//       totalPages: totalPages,
//       paginatedItems,
//     })
//   }, [responsiveItemsPerPage])

//   React.useEffect(() => {
//     getItemsPerPage()
//     getPageData()
//   }, [width])

//   return {
//     slideItemRef,
//     ...paginationData,
//   }
// }

// export default usePagination
