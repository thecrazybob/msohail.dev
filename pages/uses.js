import TitleBar from "../components/title-bar";
import AppBox from "../components/app-box";
import raycastIcon from "../public/applications/raycast.png";
import chromeIcon from "../public/applications/chrome.png";
import sparkIcon from "../public/applications/spark.png";
import bearIcon from "../public/applications/bear.png";
import milanoteIcon from "../public/applications/milanote.png";
import figmaIcon from "../public/applications/figma.png";
import telegramIcon from "../public/applications/telegram.png";
import discordIcon from "../public/applications/discord.png";
import slackIcon from "../public/applications/slack.png";
import trelloIcon from "../public/applications/trello.png";
import insomniaIcon from "../public/applications/insomnia.png";
import rectangleIcon from "../public/applications/rectangle.png";
import bartenderIcon from "../public/applications/bartender.png";
import sipIcon from "../public/applications/sip.png";
import cleanshotIcon from "../public/applications/cleanshot.png";
import handmirrorIcon from "../public/applications/hand-mirror.png";
import textsniperIcon from "../public/applications/textsniper.png";
import homebrewIcon from "../public/applications/homebrew.png";
import tinkerwellIcon from "../public/applications/tinkerwell.png";
import vscodeIcon from "../public/applications/vscode.png";
import phpstormIcon from "../public/applications/phpstorm.png";
import authyIcon from "../public/applications/authy.png";
import onepasswordIcon from "../public/applications/1password.png";
import fbarIcon from "../public/applications/f-bar.png";
import tableplusIcon from "../public/applications/tableplus.png";
import termiusIcon from "../public/applications/termius.png";
import { NextSeo } from "next-seo";

export default function Uses() {
  const apps = [
    {
      image: chromeIcon,
      title: "Google Chrome",
      description:
        "My favorite browser for both dev and general use. I use quite a lot of extensions that are listed on the bottom of this page",
    },
    {
      image: sparkIcon,
      title: "Spark",
      description:
        "My favorite mail app that I use on my macOS and iOS. Its a life changer!",
    },
    {
      image: bearIcon,
      title: "Bear",
      description:
        "Markdown note-taking app for my own articles, university stuff and just usual notes",
    },
    {
      image: milanoteIcon,
      title: "Milanote",
      description:
        "The note-taking app I use for projects. Highly recommended for brainstorming and mind maps",
    },
    {
      image: figmaIcon,
      title: "Figma",
      description:
        "For mockups and designing web sites like this one for example",
    },
    {
      image: telegramIcon,
      title: "Telegram",
      description:
        "My favorite messaging app that actually cares about the privacy aspect",
    },
    {
      image: discordIcon,
      title: "Discord",
      description:
        "For hanging out with developer communites and sometimes gaming communities",
    },
    {
      image: slackIcon,
      title: "Slack",
      description: "For client projects that are already on Slack",
    },
    {
      image: trelloIcon,
      title: "Trello",
      description:
        "For keeping track of tasks where multiple people are working together",
    },
    {
      image: insomniaIcon,
      title: "Insomnia",
      description: "For making API requests and testing the APIs that I make",
    },
    {
      image: rectangleIcon,
      title: "Rectangle",
      description: "Resize macOS windows using shortcuts",
    },
    {
      image: bartenderIcon,
      title: "Bartender",
      description: "Cleans up my macOS's application bar",
    },
    {
      image: sipIcon,
      title: "Sip",
      description: "Simple and cool color picker for macOS",
    },
    {
      image: cleanshotIcon,
      title: "CleanShot",
      description:
        "It has all of the things that are missing in the default macOS screenshot utility",
    },
    {
      image: handmirrorIcon,
      title: "Hand Mirror",
      description: "A digital mirror before I go into those Zoom meetings",
    },
    {
      image: textsniperIcon,
      title: "TextSniper",
      description: "An OCR tool when copying isn't allowed",
    },
    {
      image: homebrewIcon,
      title: "Homebrew",
      description: "Package management for macOS",
    },
    {
      image: tinkerwellIcon,
      title: "Tinkerwell",
      description: "For debugging and testing out live PHP/Laravel code",
    },
    {
      image: vscodeIcon,
      title: "VSCode",
      description: "My favorite IDE for coding Javascript, Python and so on...",
    },
    {
      image: phpstormIcon,
      title: "PHPStorm",
      description:
        "My favorite IDE for coding PHP, Laravel and Vue applications",
    },
    {
      image: authyIcon,
      title: "Authy",
      description:
        "2FA manager that is cross-platform and secured with a password",
    },
    {
      image: raycastIcon,
      title: "Raycast",
      description:
        "Raycast is one of my favorite Mac productivity tools. I was previously using Alfred",
    },
    {
      image: onepasswordIcon,
      title: "1Password",
      description:
        "My favorite password manager so I don't have to remember them by heart",
    },
    {
      image: fbarIcon,
      title: "F-Bar",
      description: "For managing the sites I have hosted via Laravel Forge",
    },
    {
      image: tableplusIcon,
      title: "TablePlus",
      description: "For managing all types of databases",
    },
    {
      image: termiusIcon,
      title: "Termius",
      description: "SSH client that works both on my macOS and iOS",
    },
  ];
  return (
    <>
      <NextSeo
        title="Uses - Mohammed Sohail"
        description="List of applications, gear and extensions that I use daily"
      />
      <TitleBar
        title="Uses"
        description="List of applications, gear and extensions that I use daily"
      ></TitleBar>

      <div>
        <h2 className="mb-10 font-sans text-4xl">Gear</h2>
        <ul className="font-body text-xl">
          <li>
            <strong>Monitor</strong>: ASUS ProArt PA279CV 4K USB-C and DELL
            S2721QS
          </li>
          <li>
            <strong>Laptop</strong>: M1 MacBook Pro 14 inch with 16 GB RAM
          </li>
          <li>
            <strong>Webcam</strong>: Logitech C922
          </li>
          <li>
            <strong>Mouse</strong>: Logitech MX Master 3
          </li>
          <li>
            <strong>Keyboard</strong>: Apple Magic Space Grey
          </li>
          <li>
            <strong>Headphones</strong>: Airpods Pro and Bose QC45
          </li>
          <li>
            <strong>Chair</strong>: DX Racer RV131
          </li>
          <li>
            <strong>Smartphone</strong>: iPhone 12 Pro Max 256 GB
          </li>
          <li>
            <strong>Smartwatch</strong>: Apple Watch Series 6
          </li>
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="mb-10 font-sans text-4xl">Desktop Apps</h2>

        <div className="flex flex-col space-y-6">
          {apps.map(({ image, title, description }) => (
            <AppBox image={image} title={title} description={description} />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="mt-16">
          <h2 className="mb-10 font-sans text-4xl">Chrome extensions</h2>
          <ul className="font-body text-xl">
            <li>1Password</li>
            <li>Alpine.js devtools</li>
            <li>Livewire devtools</li>
            <li>React Developer Tools</li>
            <li>Redux DevTools</li>
            <li>Vue.js devtools</li>
            <li>uBlock Origin</li>
            <li>URL Incrementer</li>
            <li>User-Agent Switcher for Chrome</li>
            <li>Grammarly</li>
            <li>Language Reactor</li>
            <li>Teleparty</li>
            <li>Windy (paid)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
