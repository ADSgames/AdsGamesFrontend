import * as React from "react";

import { NavContainer, LogoContainer } from "./Navigation.style";
import type { NavButtonProps } from "./NavButton";
import NavButton from "./NavButton";

import * as ICONS from "../../images/nav_icons";
import * as ROUTES from "../../constants/routes";
import { logo, logoBlack } from "../../images/logos";

export const navLinks: NavButtonProps[] = [
  {
    text: "Home",
    icon: ICONS.home,
    hoverIcon: ICONS.homeHover,
    route: ROUTES.HOME,
  },
  {
    text: "Games",
    icon: ICONS.games,
    hoverIcon: ICONS.gamesHover,
    route: ROUTES.GAMES,
  },
  {
    text: "Contact",
    icon: ICONS.contact,
    hoverIcon: ICONS.contactHover,
    route: ROUTES.CONTACT,
  },
  {
    text: "Assets",
    icon: ICONS.assets,
    hoverIcon: ICONS.assetsHover,
    route: ROUTES.ASSETS,
  },
  {
    text: "Learn",
    icon: ICONS.learn,
    hoverIcon: ICONS.learnHover,
    route: ROUTES.LEARN,
  },
  {
    text: "Members",
    icon: ICONS.members,
    hoverIcon: ICONS.membersHover,
    route: ROUTES.MEMBERS,
  },
  {
    text: "Links",
    icon: ICONS.links,
    hoverIcon: ICONS.linksHover,
    route: ROUTES.LINKS,
  },
  {
    text: "About",
    icon: ICONS.about,
    hoverIcon: ICONS.aboutHover,
    route: ROUTES.ABOUT,
  },
];

const Navigation: React.FC = () => (
  <NavContainer>
    <LogoContainer image={logoBlack} imageHover={logo} to={ROUTES.HOME} />
    {navLinks.map((link) => (
      <NavButton key={link.text} {...link} />
    ))}
  </NavContainer>
);

export default Navigation;
