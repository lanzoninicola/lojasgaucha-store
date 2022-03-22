/**
 * Get the color for the theme.
 * @param {string} color
 * @param {object} options
 */

const colorsTheme = () => {
  const themeColors = {
    purple: "#A4347E",
    blue: "#058EC5",
  }

  const baseColors = {
    white: "#FEFEFF",
    black: "#464646",
    whitegray: "#F7F7F9",
    green: "#41E2BA",
    lightgreen: "#41e2ba",
    yellow: "#F7E733",
    lightyellow: "#F7E733",
    red: "#FF0000",
    lightred: "#ffcccb",
  }

  return {
    ...themeColors,
    ...baseColors,
  }
}

export default colorsTheme
