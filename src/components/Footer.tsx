import { motion } from "motion/react";
import { fadeAnim } from "../animations";

import github from "../assets/github.svg";
import discord from "../assets/discord.svg";
import youtube from "../assets/youtube.svg";

export default function Footer() {
  const links = [
    {
      name: "Github",
      icon: github,
      path: "https://www.github.com/MohdDawoodO",
    },
    { name: "Discord", icon: discord, path: "https://discord.gg/zAqTwQVV6V" },
    {
      name: "Youtube",
      icon: youtube,
      path: "https://www.youtube.com/@MohdDawoodO",
    },
  ];

  return (
    <motion.footer
      variants={fadeAnim(1)}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.5, once: true }}
      className="mb-16 flex min-h-[10vh] items-center justify-between px-24 py-4 font-semibold md:mb-0"
    >
      <h1 className="grow-4 text-[1.4rem]">MohdDawoodO &copy; 2025</h1>

      <ul className="flex grow justify-between">
        {links.map((link) => (
          <a
            key={link.name}
            className="opacity-70 duration-200 hover:opacity-100"
            href={link.path}
            target="_blank"
            title={link.name}
          >
            <img src={link.icon} alt={link.name} />
          </a>
        ))}
      </ul>
    </motion.footer>
  );
}
