import Image from "next/image";
import FeaturedProject from "../components/project";
// import LatestArticles from "../components/latest-articles";
import Newsletter from "../components/newsletter";
import profilePic from "../public/profile.png";
import weqayaLogo from "../public/project-weqaya.png";
import laravelLogo from "../public/laravel.svg";
import alpinejsLogo from "../public/alpinejs.svg";
import tailwindcssLogo from "../public/tailwindcss.svg";
import twillLogo from "../public/twill.svg";
import livewireLogo from "../public/livewire.svg";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Mohammed Sohail - Full Stack Engineer"
        description="I'm Mohammed Sohail, a full stack engineer. I thoughtfully design, expertly build and carefully maintain meaningful, results-driven websites and applications that are a pleasure to use. I mainly develop web applications in Laravel/PHP alongside Next.js, Livewire or Inertia."
      />
      <section className="mb-20 border-b-2 border-black pb-20 dark:border-white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:gap-0">
          <div>
            <div className="flex flex-col space-y-10 dark:text-gray-200">
              <h2 className="text-5xl">Hi there! 👋</h2>

              <h2 className="text-5xl">
                I'm Mohammed Sohail, a full stack engineer.
              </h2>
            </div>

            <div className="my-10 flex flex-col space-y-5 text-2xl tracking-tight text-gray-700 dark:text-gray-400">
              <p>
                I thoughtfully design, expertly build and carefully maintain
                meaningful, results-driven websites and applications that are a
                pleasure to use. I mainly develop web applications in
                Laravel/PHP alongside Next.js, Livewire or Inertia.
              </p>

              <p>
                I am currently pursuing my CS degree at University of London,
                and I work as a freelance web developer.
              </p>
            </div>
          </div>

          <div className="my-auto justify-self-center">
            <Image
              src={profilePic}
              alt="Mohammed Sohail"
              width={425}
              height={440}
            ></Image>
          </div>
        </div>
      </section>
      <FeaturedProject
        linkLabel="View all of my work"
        linkUrl="/work"
        removePadding={true}
        featured={true}
        title="Weqaya.ae"
        description="I designed and developed the website using cutting-edge technologies. The content is retrieved from a headless-CMS and the COVID-19 cases are retrieved using APIs."
        timeframe="< 1 month"
        image={weqayaLogo}
        tech={[
          laravelLogo,
          alpinejsLogo,
          tailwindcssLogo,
          twillLogo,
          livewireLogo,
        ]}
      ></FeaturedProject>
      {/* <LatestArticles></LatestArticles> */}
      <Newsletter></Newsletter>
    </>
  );
}
