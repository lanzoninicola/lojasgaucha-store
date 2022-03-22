import carouselTheme from "./lib/carouselTheme"

const STYLE = "style"
const CONFIG = "config"
const DATA = "data"

function componentsTheme() {
  const componentsTheme = {
    carousel: {
      style: carouselTheme(STYLE),
      config: carouselTheme(CONFIG),
      data: carouselTheme(DATA),
    },
  }

  return componentsTheme
}

export default componentsTheme
