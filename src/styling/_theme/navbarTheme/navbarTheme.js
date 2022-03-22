import iconsTheme from "../iconsTheme/iconsTheme"

import { isNotUndefined, isNotEmptyObject, error } from "@utils/index"

import navbarLaptopLayout from "./layout/navbarLaptopLayout"
import navbarMobileLayout from "./layout/navbarMobileLayout"

import websiteLaptopNavItems from "./navItems/laptop/websiteLaptopNavItems"

import websiteMobileNavItems from "./navItems/mobile/websiteMobileNavItems"
import mapsMobileNavItems from "./navItems/mobile/mapsMobileNavItems"

function validateNavItems(navItems) {
  const { catalog } = iconsTheme()

  Object.keys(navItems).forEach(itemsGroup => {
    navItems[itemsGroup].forEach(itemGroup => {
      if (itemGroup?.icon !== itemGroup?.icon.toUpperCase()) {
        error(
          "navbarTheme",
          `The name of icon "${itemGroup.text}" for the navbarItems "${itemsGroup}" must be capitalize in "uppercase". Check which name it will choosed in the IconTheme`
        )
      }

      if (catalog[itemGroup?.icon] === undefined) {
        error(
          "navbarTheme",
          `The icon for the navbarItem "${itemGroup.text}" is not exists in the iconsTheme. It will give you problems when you will use the navbar React Components `
        )
      }
    })
  })
}

const navbarTheme = () => {
  const settings = {
    layout: {
      laptop: navbarLaptopLayout(),
      mobile: navbarMobileLayout(),
    },
    navItems: {
      laptop: {
        website: websiteLaptopNavItems(),
      },
      mobile: {
        website: websiteMobileNavItems(),
        maps: mapsMobileNavItems(),
      },
    },
  }

  const navItems = settings?.navItems

  if (isNotUndefined(navItems)) {
    if (isNotEmptyObject(navItems)) {
      Object.keys(navItems).forEach(device => {
        const deviceItems = navItems[device]
        validateNavItems(deviceItems)
      })
    }
  }

  return settings
}

export default navbarTheme
