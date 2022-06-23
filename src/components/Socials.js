import { Container, Icon } from "./Socials-style";

import spotify from "../assets/spotify.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import twitch from "../assets/twitch.svg";
import facebook from "../assets/facebook.svg";

export default function Socials() {
  const socials = [
    {
      link: "https://open.spotify.com/artist/0TueEXkLZbVrA2JcB5hkvW?si=JRQL9HlaRdmwG_Q1iAzTZw&dl_branch=1&nd=1",
      src: spotify,
    },
    {
      link: "https://www.instagram.com/eastyorksfinest",
      src: instagram,
    },
    {
      link: "https://www.twitter.com/eastyorksfinest",
      src: twitter,
    },
    {
      link: "https://www.youtube.com/gothreau",
      src: youtube,
    },
    {
      link: "https://www.twitch.tv/gothreau",
      src: twitch,
    },
    {
      link: "https://www.facebook.com/gothreau",
      src: facebook,
    },
  ];

  return (
    <Container>
      {socials.map((social) => {
        return (
          <a
            key={social.link}
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={social.src} alt={social.link} />
          </a>
        );
      })}
    </Container>
  );
}
