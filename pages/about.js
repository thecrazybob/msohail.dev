import SkillBox from "../components/skill-box";
import TitleBar from "../components/title-bar";

import laravelLogo from "../public/laravel.svg";
import phpLogo from "../public/php.svg";
import javascriptLogo from "../public/javascript.svg";
import reactLogo from "../public/react.svg";
import nextjsLogo from "../public/nextjs.svg";
import tailwindcssLogo from "../public/tailwindcss.svg";
import livewireLogo from "../public/livewire.svg";
import alpinejsLogo from "../public/alpinejs.svg";
import devopsLogo from "../public/devops.svg";

import { NextSeo } from "next-seo";

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Mohammed Sohail"
        description="The skills that I learned over the past few years"
      />
      <TitleBar
        title="About"
        description="The skills that I learned over the past few years"
      ></TitleBar>

      <div className="space-y-5 font-body text-xl">
        <p>
          My interest in coding began when I was a kid, and in time, I developed
          an interest and passion for working on computer systems and
          programming. At the age of 12, I made my website using basic HTML and
          CSS. From there on, I was captivated. So, I started learning
          programming languages on websites like Lynda, Pluralsight, and
          Udacity. Within a few years, I was almost fluent in web development
          languages, specifically PHP and JavaScript. Presently, I can say I am
          completely in love with programming despite the fact that sometimes I
          have to debug and research for hours solely to fix a minor syntax
          error.
        </p>

        <p>
          I have gone ahead to gain more valuable practical skills and
          experience while working for a web hosting company. During this time,
          I learned about configuring virtualization, managing UNIX based
          servers, and implementing suitable measures for cloud security. I also
          got to learn Python, and it helps me automate various tedious tasks in
          my daily routine.
        </p>

        <p>
          The success and satisfaction I have in this job is tremendous and
          keeps that passion burningly alive.
        </p>
      </div>

      <h2 className="my-10 max-w-max border-b-2 border-black text-3xl dark:border-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <SkillBox
          logo={laravelLogo}
          title="Laravel"
          description="My PHP Framework of choice"
        ></SkillBox>
        <SkillBox
          logo={phpLogo}
          title="PHP"
          description="My favorite backend language"
        ></SkillBox>
        <SkillBox
          logo={javascriptLogo}
          title="Javascript"
          description="For creating beautiful frontends"
        ></SkillBox>
        <SkillBox
          logo={reactLogo}
          title="React"
          description="When the web app = mobile app"
        ></SkillBox>
        <SkillBox
          logo={nextjsLogo}
          title="Nextjs"
          description="My choice for frontend SPAs"
        ></SkillBox>
        <SkillBox
          logo={tailwindcssLogo}
          title="Tailwindcss"
          description="My favorite CSS framework"
        ></SkillBox>
        <SkillBox
          logo={livewireLogo}
          title="Livewire"
          description="To avoid the complexity of React"
        ></SkillBox>
        <SkillBox
          logo={alpinejsLogo}
          title="Alpinejs"
          description="When an SPA is overkill"
        ></SkillBox>
        <SkillBox
          logo={devopsLogo}
          title="Devops"
          description="Setting up Linux and Windows servers"
        ></SkillBox>
      </div>

      <div className="mt-16 grid md:grid-cols-2">
        <div>
          <h3 className="max-w-max border-b-2 py-4 border-black text-3xl dark:border-white">
            Languages that I speak:
          </h3>
          <ul className="my-8">
            <li>English (fluent)</li>
            <li>Pashto (native)</li>
            <li>Urdu (fluent)</li>
            <li>Turkish (elementary proficiency)</li>
          </ul>
        </div>

        <div>
          <h2 className="max-w-max border-b-2 py-4 border-black text-3xl dark:border-white">
            What am I doing right now?
          </h2>
          <ul className="my-8">
            <li>Working as a freelance developer</li>
            <li>Studying Computer Science at University of London</li>
            <li>Working side projects over the weekend</li>
            <li>Reading books on self-development</li>
          </ul>
        </div>

      </div>
    </>
  );
}
