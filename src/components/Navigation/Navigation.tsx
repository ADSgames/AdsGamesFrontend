import * as React from "react";

import { NavContainer } from "./Navigation.style";
import NavButton, { NavButtonProps } from "./NavButton";

import * as ICONS from "../../images/nav_icons";
import * as ROUTES from "../../constants/routes";

export const navLinks: NavButtonProps[] = [
  {
    text: "Home",
    icon: ICONS.home,
    hoverIcon: ICONS.homeHover,
    route: ROUTES.HOME,
    hidden: false,
  },
  {
    text: "Games",
    icon: ICONS.games,
    hoverIcon: ICONS.gamesHover,
    route: ROUTES.GAMES,
    hidden: false,
  },
  {
    text: "Contact",
    icon: ICONS.contact,
    hoverIcon: ICONS.contactHover,
    route: ROUTES.CONTACT,
    hidden: false,
  },
  {
    text: "Assets",
    icon: ICONS.assets,
    hoverIcon: ICONS.assetsHover,
    route: ROUTES.ASSETS,
    hidden: true,
  },
  {
    text: "Learn",
    icon: ICONS.learn,
    hoverIcon: ICONS.learnHover,
    route: ROUTES.LEARN,
    hidden: true,
  },
  {
    text: "Links",
    icon: ICONS.links,
    hoverIcon: ICONS.linksHover,
    route: ROUTES.LINKS,
    hidden: true,
  },
  {
    text: "About",
    icon: ICONS.about,
    hoverIcon: ICONS.aboutHover,
    route: ROUTES.ABOUT,
    hidden: false,
  },
  {
    text: "Login",
    icon: ICONS.members,
    hoverIcon: ICONS.membersHover,
    route: ROUTES.MEMBERS,
    hidden: false,
  },
];

const Navigation: React.FC = () => (
  <NavContainer>
    {navLinks
      .filter((link) => !link.hidden)
      .map((link) => (
        <NavButton key={link.text} {...link} />
      ))}
  </NavContainer>
);

export default Navigation;
