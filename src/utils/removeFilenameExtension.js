/**
 * Remove extension ".ext" from the filename
 * @param {string} filename
 *
 */

function removeFilenameExtension(filename) {
  if (typeof filename !== "string") {
    console.error(
      `removeFilenameExtension() function - First parameter must be a string instead of "${typeof filename}"`
    )
    return filename
  }

  return filename.replace(/\.[^/.]+$/, "")
}

export default removeFilenameExtension
