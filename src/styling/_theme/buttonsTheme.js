import { colorTheme } from "@colors/lib"

const buttonTheme = () => {
  return {
    primary: {
      blue: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorTheme("orange")}`,
          onHover: "none",
        },
        background: {
          default: colorTheme("blue"),
          onFocus: colorTheme("blue"),
          onHover: colorTheme("blueLight"),
        },
        labelColor: {
          default: colorTheme("whitegray"),
          onFocus: colorTheme("orange"),
          onHover: colorTheme("whitegray"),
        },
      },
      orange: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorTheme("blue")}`,
          onHover: "none",
        },
        background: {
          default: colorTheme("orange"),
          onFocus: colorTheme("orange"),
          onHover: colorTheme("orangeLight"),
        },
        labelColor: {
          default: colorTheme("whitegray"),
          onFocus: colorTheme("blue"),
          onHover: colorTheme("whitegray"),
        },
      },
    },

    secondary: {
      green: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorTheme("blue")}`,
          onHover: "none",
        },
        background: {
          default: colorTheme("green"),
          onFocus: colorTheme("green"),
          onHover: colorTheme("lightgreen"),
        },
        labelColor: {
          default: colorTheme("blue"),
          onFocus: colorTheme("blue"),
          onHover: colorTheme("blue"),
        },
      },
      yellow: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorTheme("blue")}`,
          onHover: "none",
        },
        background: {
          default: colorTheme("yellow"),
          onFocus: colorTheme("yellow"),
          onHover: colorTheme("lightyellow"),
        },
        labelColor: {
          default: colorTheme("blue"),
          onFocus: colorTheme("blue"),
          onHover: colorTheme("blue"),
        },
      },
    },
  }
}

export default buttonTheme
