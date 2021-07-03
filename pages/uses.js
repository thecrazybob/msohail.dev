import TitleBar from "../components/title-bar"
import AppBox from "../components/app-box"
import chromeIcon from '../public/applications/chrome.png'
import sparkIcon from '../public/applications/spark.png'
import bearIcon from '../public/applications/bear.png'
import milanoteIcon from '../public/applications/milanote.png'
import figmaIcon from '../public/applications/figma.png'
import telegramIcon from '../public/applications/telegram.png'
import discordIcon from '../public/applications/discord.png'
import slackIcon from '../public/applications/slack.png'
import trelloIcon from '../public/applications/trello.png'
import todoistIcon from '../public/applications/todoist.png'
import insomniaIcon from '../public/applications/insomnia.png'
import rectangleIcon from '../public/applications/rectangle.png'
import rocketIcon from '../public/applications/rocket.png'
import bartenderIcon from '../public/applications/bartender.png'
import sipIcon from '../public/applications/sip.png'
import cleanshotIcon from '../public/applications/cleanshot.png'
import handmirrorIcon from '../public/applications/hand-mirror.png'
import textsniperIcon from '../public/applications/textsniper.png'
import homebrewIcon from '../public/applications/homebrew.png'
import tinkerwellIcon from '../public/applications/tinkerwell.png'
import vscodeIcon from '../public/applications/vscode.png'
import authyIcon from '../public/applications/authy.png'
import alfredIcon from '../public/applications/alfred.png'
import onepasswordIcon from '../public/applications/1password.png'
import fbarIcon from '../public/applications/f-bar.png'
import tableplusIcon from '../public/applications/tableplus.png'
import termiusIcon from '../public/applications/termius.png'

export default function Uses() {
    return (
        <>
            <TitleBar title="Uses" description="The complete list of applications, gear and extensions that I use daily"></TitleBar>

            <div>
                <h2 className="text-4xl mb-10 font-sans">Gear</h2>
                <ul className="font-body text-xl">
                    <li><strong>Monitor & Laptop</strong>: Dell U2720Q 4K connected to an M1 Macbook Pro 13 inch with an 8 GB RAM</li>
                    <li><strong>Webcam</strong>: Logitech C922</li>
                    <li><strong>Mouse</strong>: Logitech MX Master 3 and Apple Magic Mouse</li>
                    <li><strong>Keyboard</strong>: Apple Magic Space Grey and Keychron K8</li>
                    <li><strong>Headphones</strong>: Airpods Pro and Airpods Pro Max</li>
                    <li><strong>Chair</strong>: DX Racer</li>
                    <li><strong>Smartphone</strong>: iPhone 12 Pro Max 256 GB</li>
                    <li><strong>Smartwatch</strong>: Apple Watch Series 6</li>
                    <li><strong>Console</strong>: PS5 Digital Edition connected to a Dell P2415Q 4K monitor</li>
                </ul>
            </div>

            <div className="mt-16">
                <h2 className="text-4xl mb-10 font-sans">Desktop Apps</h2>

                <div className="flex flex-col space-y-6">
                    <AppBox image={chromeIcon} title="Google Chrome" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={sparkIcon} title="Spark" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={bearIcon} title="Bear" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={milanoteIcon} title="Milanote" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={figmaIcon} title="Figma" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={telegramIcon} title="Telegram" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={discordIcon} title="Discord" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={slackIcon} title="Slack" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={trelloIcon} title="Trello" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={todoistIcon} title="Todoist" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={insomniaIcon} title="Insomnia" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={rectangleIcon} title="Rectangle" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={rocketIcon} title="Rocket" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={bartenderIcon} title="Bartender" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={sipIcon} title="Sip" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={cleanshotIcon} title="CleanShot" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={handmirrorIcon} title="Hand Mirror" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={textsniperIcon} title="TextSniper" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={homebrewIcon} title="Homebrew" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={tinkerwellIcon} title="Tinkerwell" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={vscodeIcon} title="VSCode" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={authyIcon} title="Authy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={alfredIcon} title="Alfred" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={onepasswordIcon} title="1Password" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={fbarIcon} title="F-Bar" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={tableplusIcon} title="TablePlus" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                    <AppBox image={termiusIcon} title="Termius" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor, et, aliquam sagittis tellus." />
                </div>

            </div>

            <div className="grid md:grid-cols-2">
                <div className="mt-16">
                    <h2 className="text-4xl mb-10 font-sans">Chrome extensions</h2>
                    <ul className="font-body text-xl">
                        <li>1Password</li>
                        <li>Alpine.js devtools</li>
                        <li>React Developer Tools</li>
                        <li>Redux DevTools</li>
                        <li>Vue.js devtools</li>
                        <li>uBlock Origin</li>
                        <li>URL Incrementer</li>
                        <li>User-Agent Switcher for Chrome</li>
                        <li>Grammarly</li>
                        <li>Language Learning with Netflix</li>
                        <li>Mendeley Web Importer</li>
                        <li>mymind</li>
                        <li>Teleparty</li>
                        <li>Windy (paid)</li>
                    </ul>
                </div>

                <div className="mt-16">
                    <h2 className="text-4xl mb-10 font-sans">Services</h2>
                    <ul className="text-xl font-body">
                        <li>Vercel</li>
                        <li>Cloudflare</li>
                        <li>Spotify</li>
                        <li>Netflix</li>
                        <li>Google Drive</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
