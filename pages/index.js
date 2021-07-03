import Image from 'next/image'
import FeaturedProject from '../components/project'
import LatestArticles from '../components/latest-articles'
import Newsletter from '../components/newsletter'
import profilePic from '../public/profile.png'
import weqayaLogo from '../public/project-weqaya.png'
import laravelLogo from '../public/laravel.svg'
import alpinejsLogo from '../public/alpinejs.svg'
import tailwindcssLogo from '../public/tailwindcss.svg'
import twillLogo from '../public/twill.svg'
import livewireLogo from '../public/livewire.svg'

export default function Home() {
  return (
        <>
            <section className="mb-20 pb-20 border-b-2 border-black dark:border-white">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-20 lg:gap-0">

                    <div>
                        <div className="flex flex-col space-y-10 dark:text-gray-200">

                            <h2 className="text-5xl">Hi there! 👋</h2>

                            <h2 className="text-5xl">I'm Mohammed Sohail, a full stack web developer.</h2>
                        </div>

                        <div className="flex text-gray-700 dark:text-gray-400 flex-col my-10 space-y-5 text-2xl tracking-tight">

                            <p>I thoughtfully design, expertly build and carefully maintain meaningful, results-driven websites and applications that are a pleasure to use. I mainly develop web applications in Laravel/PHP alongside Next.js, Livewire or Inertia.</p>

                            <p>I am currently pursuing my CS degree at Bilkent University, Ankara and I work as a freelance web developer.</p>

                        </div>
                    </div>

                    <div className="justify-self-center my-auto">
                        <Image src={profilePic} alt="Mohammed Sohail" width={425} height={440}></Image>
                    </div>

                </div>
            </section>
            <FeaturedProject linkLabel="View all of my work" linkUrl="/work" removePadding={true} featured={true} title="Weqaya.ae" description="I designed and developed the website using cutting-edge technologies. The content is retrieved from a headless-CMS and the COVID-19 cases are retrieved using APIs." timeframe="< 1 month" image={weqayaLogo} tech={[laravelLogo,alpinejsLogo,tailwindcssLogo,twillLogo,livewireLogo]}></FeaturedProject>
            {/* <LatestArticles></LatestArticles> */}
            <Newsletter className="mt-20"></Newsletter>
        </>
  )
}
