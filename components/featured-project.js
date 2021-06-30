import Link from 'next/link'
import Image from 'next/image'
import projectWeqaya from '../public/project-weqaya.png'
import laravelLogo from '../public/laravel.svg'
import alpinejsLogo from '../public/alpinejs.svg'
import tailwindcssLogo from '../public/tailwindcss.svg'
import twillLogo from '../public/twill.svg'
import livewireLogo from '../public/livewire.svg'

export default function FeaturedProject() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b-2 pb-20 border-black">
            <div className="flex flex-col space-y-5">
                <h2 className="text-4xl mb-5">Featured Project</h2>

                <span className="font-medium text-xl">Weqaya.ae</span>

                <p className="w-full md:w-2/3 text-xl">I designed and developed the website using cutting-edge technologies. The content is retrieved from a headless-CMS and the COVID-19 cases are retrieved using APIs.</p>

                <span className="border-b max-w-max border-gray-400 text-gray-800">Tech used:</span>

                <div className="flex space-x-4">
                    <div className="flex drop-shadow-md filter bg-white p-4 rounded-full w-14 items-center justify-center">
                        <Image src={laravelLogo}></Image>
                    </div>
                    <div className="flex drop-shadow-md filter bg-white p-4 rounded-full w-14 items-center justify-center">
                        <Image src={alpinejsLogo}></Image>
                    </div>
                    <div className="flex drop-shadow-md filter bg-white p-4 rounded-full w-14 items-center justify-center">
                        <Image src={tailwindcssLogo}></Image>
                    </div>
                    <div className="flex drop-shadow-md filter bg-white p-4 rounded-full w-14 items-center justify-center">
                        <Image src={twillLogo}></Image>
                    </div>
                    <div className="flex drop-shadow-md filter bg-white p-4 rounded-full w-14 items-center justify-center">
                        <Image src={livewireLogo}></Image>
                    </div>
                </div>

                <span className="border-b max-w-max border-gray-400 text-gray-800">Timeframe:</span>

                <span>{"<"} 1 month</span>

                <span className="pt-6 border-b border-black max-w-max font-medium tracking-wide"><Link href="/work"><a>View of all my work ↗</a></Link></span>
            </div>

            <div className="border-black border-4 bg-white justify-center rounded-xl h-96" style={{ position: 'relative'}}>
                <div className="flex h-full justify-center items-center px-16">
                    <Image src={projectWeqaya} width={465} height={114}></Image>
                </div>
            </div>

        </div>
    )
}
