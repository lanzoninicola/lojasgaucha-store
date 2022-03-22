import { colorTheme } from "@colors/lib"

const navbarLaptopLayout = () => {
  const layout = {
    container: {
      width: "700",
      height: "100%",
      background: null,
    },
    navItem: {
      icon: {
        show: true,
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
        show: true, // true || false
        capitalize: "uppercase", // "lowercase" || "uppercase" || "capitalize"
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
    },
  }

  return layout
}

export default navbarLaptopLayout
