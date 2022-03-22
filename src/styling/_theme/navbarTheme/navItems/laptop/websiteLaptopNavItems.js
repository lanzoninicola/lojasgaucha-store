// TODO: verify when use modal type there is the module prop

export default function websiteLaptopNavItems() {
  return [
    {
      icon: "HOME",
      text: "ambientes",
      to: {
        type: "link",
        value: "/ambientes",
      },
      spotlighted: { yesno: true, color: "green" },
    },
    {
      icon: "SHOP",
      text: "sobre nós",
      to: {
        type: "link",
        value: "/institutional",
      },
      spotlighted: { yesno: false, color: "default" },
    },
    {
      icon: "PIN",
      text: "loja",
      to: {
        type: "link",
        value: "/maps",
      },
      spotlighted: { yesno: false, color: "default" },
    },

    {
      icon: "CLOCK",
      text: "Horarios",
      to: {
        type: "modal",
        module: "navbarLaptop",
        value: "ModalHorarios",
      },
      spotlighted: { yesno: false, color: "default" },
    },
    {
      icon: "CALENDAR_DATES",
      text: "agendamento",
      to: {
        type: "link",
        value: "/agendamento",
      },
      spotlighted: { yesno: true, color: "orange" },
      focused: "idle",
    },
    {
      icon: "SEARCH",
      text: "pesquisa",
      to: {
        type: "modal",
        module: "navbarLaptop",
        value: "ModalPesquisa",
      },
      spotlighted: { yesno: false, color: "default" },
      focused: "idle",
    },
  ]
}
