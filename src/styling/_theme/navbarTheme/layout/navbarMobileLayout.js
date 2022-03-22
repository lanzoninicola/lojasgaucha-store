import { colorTheme } from "@colors/lib"

const navbarMobileLayout = () => {
  const layout = {
    container: {
      width: "100vw",
      height: 70,
      background: colorTheme("white", { colorUnit: "rgb", opacity: 0 }),
    },
    navItem: {
      icon: {
        color: {
          default: "blue",
          hovered: "blue",
          spotligthed: {
            orange: "orange",
            green: "green",
          },
        },
        size: "24",
      },
      text: {
        capitalize: "lowercase", // "lowercase" || "uppercase" || "capitalize"
        size: 12, // value in PX
        lineHeight: 12, // value in PX
        color: {
          default: colorTheme("blue"),
          hovered: colorTheme("blue"),
          spotligthed: {
            orange: colorTheme("orange"),
            green: colorTheme("green"),
          },
        },
      },
      effects: {
        hover: {
          borderTop: `4px solid ${colorTheme("green")}`,
          transform: `scale(1.1)`,
        },
        framerMotion: {
          hover: {
            scale: 1.2,
            borderTop: `4px solid ${colorTheme("green")}`,
          },
          tap: {
            scale: 1.3,
            borderTop: `4px solid ${colorTheme("green")}`,
          },
        },
      },
    },
  }

  return layout
}

export default navbarMobileLayout
