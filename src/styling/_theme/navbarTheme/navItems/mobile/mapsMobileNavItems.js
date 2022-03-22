import companyTheme from "../../../companyTheme/companyTheme"

export default function mapsMobileNavItems() {
  const companyMapData = companyTheme("maps")

  const { placeName } = companyMapData

  return [
    {
      icon: "GMAPS",
      text: "Google Maps",
      to: {
        type: "anchor",
        value: `https://www.google.com/maps/search/?api=1&query=${placeName}`,
      },
      spotlighted: { yesno: false, color: "" },
    },
    {
      icon: "WAZE",
      text: "Waze",
      to: {
        type: "anchor",
        value: `https://waze.com/ul?q=${placeName}`,
      },
      spotlighted: { yesno: false, color: "" },
    },
    {
      icon: "APPLE_MAPS",
      text: "Apple Maps",
      to: {
        type: "anchor",
        value: `http://maps.apple.com/?q=${placeName}`,
      },
      spotlighted: { yesno: false, color: "" },
    },
  ]
}
