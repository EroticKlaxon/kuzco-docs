import React from "react";
import { DiscordIcon, GitHubIcon } from "nextra/icons";
import { useTheme } from "nextra-theme-docs";

function Github() {
  return (
    <a
      href="https://github.com/context-labs"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Context GitHub"
      target="_blank"
      rel="noreferrer"
    >
      <GitHubIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://discord.gg/kuzco"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Kuzco Discord server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

function Twitter() {
  const { theme = "dark" } = useTheme();
  return (
    <a
      href="https://twitter.com/kuzco_xyz"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Context Twitter"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z"
          fill={theme === "dark" ? "white" : "black"}
        />
      </svg>
    </a>
  );
}

export { Github, Discord, Twitter };
