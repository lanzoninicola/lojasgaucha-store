/**
 * This function paginate data in array format
 * @param {array} items
 * @param {number} itemsPerPage
 * @param {number} renderedPage
 */

import { isUndefined, isNotNumber, isNotArray, error } from "./index";

function paginator({ items = [], renderedPage = 1, itemsPerPage = 1 }) {
  if (isUndefined(items)) {
    return error(
      "paginator()",
      `You must provide an array as first parameter (items), instead of: ${typeof items}`
    );
  }

  if (isNotArray(items)) {
    return error(
      "paginator()",
      `You must provide an array as first parameter (items), instead of: ${typeof items}`
    );
  }

  if (isNotNumber(itemsPerPage)) {
    return error(
      "paginator()",
      `You must provide a number as second parameter (itemsPerPage), instead of: ${typeof itemsPerPage}`
    );
  }

  if (isNotNumber(renderedPage)) {
    return error(
      "paginator()",
      `You must provide a number as second parameter (renderedPage), instead of: ${typeof renderedPage}`
    );
  }

  let _renderedPage = renderedPage,
    _itemsPerPage = itemsPerPage,
    offset = (_renderedPage - 1) * _itemsPerPage,
    paginatedItems = items.slice(offset).slice(0, _itemsPerPage),
    totalPages = Math.ceil(items.length / _itemsPerPage);

  return {
    page: _renderedPage,
    itemsPerPage: _itemsPerPage,
    prevPage: _renderedPage - 1 ? _renderedPage - 1 : null,
    nextPage: totalPages > _renderedPage ? _renderedPage + 1 : null,
    total: items.length,
    totalPages: totalPages,
    paginatedItems,
  };
}

export default paginator;
