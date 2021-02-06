import * as React from "react";

import Card from "../components/Card";
import LinkDescription from "../components/LinkLayout/LinkDescription";
import LinkLayout from "../components/LinkLayout/LinkLayout";
import LinkIcon from "../components/LinkLayout/LinkIcon";
import { LinkTag } from "../components/LinkLayout";
import LinkTagLayout from "../components/LinkLayout/LinkTagLayout";

import ContentHeader from "../components/ContentHeader";

import IndexLayout from "../layouts";

import * as ICONS from "../images/about_icons";

const staff = [
  {
    title: "Danny",
    text: `Daniel Van Stemp (a.k.a. Danward or Danny) is a programmer and an artist.
       He has the ability to communicate with his chickens, and once 3D modelled a cube.`,
    image: ICONS.danny,
    iconBgColor: "#7700ff",
    tags: ["Code", "Design", "Social Media"],
  },
  {
    title: "Allan",
    text: `Allan Legemaate is the lead programmer, and makes music, this site and game engines, 
      and codes in 12 languages. He also has the ability to spawn random animals in real life.`,
    image: ICONS.allan,
    iconBgColor: "red",
    tags: ["Code", "Music", "Web Design"],
  },
  {
    title: "Sully",
    text:
      "Sullivan Stobo (Sully), is a game developer. He has a rockin' beard and may or may not wear a fedora.",
    image: ICONS.sully,
    iconBgColor: "#267F00",
    tags: ["Code", "Art", "Music"],
  },
  {
    title: "Ryan",
    text:
      "Ryan Van Stemp (Ryanthalais), he is 4 feet tall and lives in a cave.",
    image: ICONS.ryan,
    iconBgColor: "#002BF9",
    tags: ["3D Modeling"],
  },
  {
    title: "Miriam",
    text:
      "Miriam Legemaate makes art and pixel art for our games. She is rumoured to turn into a cat on full moons, but we have no proof.",
    image: ICONS.miriam,
    iconBgColor: "#007F0E",
    tags: ["Art"],
  },
];

const AboutPage: React.FC = () => (
  <IndexLayout title="About">
    <ContentHeader text="About A.D.S. Games" />
    <Card>
      <LinkDescription>
        A.D.S. (Allan and Daniel Software) Games was founded on the 21st of
        March 2011 by Allan Legemaate and Daniel Van Stemp. It contains indie
        games programmed in C++, Java, Visual Basic, Scratch, HTML5, and Game
        Maker.
      </LinkDescription>
    </Card>

    <Card>
      <ContentHeader text="Staff" />
    </Card>
    {staff.map(({ title, text, image, tags, iconBgColor }) => (
      <Card title={title} key={title}>
        <LinkLayout>
          <LinkDescription>
            <LinkTagLayout>
              {tags.map((tag) => (
                <LinkTag key={tag}>{tag}</LinkTag>
              ))}
            </LinkTagLayout>
            {text}
          </LinkDescription>
          <LinkIcon
            color={iconBgColor}
            title={title}
            image={image}
            width={160}
          />
        </LinkLayout>
      </Card>
    ))}
  </IndexLayout>
);

export default AboutPage;
