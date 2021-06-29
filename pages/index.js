import Image from 'next/image'
import profilePic from '../public/profile.png'

export default function Home() {
  return (
        <>
            <section className="mb-10">
                <div className="grid md:grid-cols-2 grid-cols-1">

                    <div>
                        <div className="flex flex-col space-y-10">

                            <h2 className="text-5xl">Hi there! 👋</h2>

                            <h2 className="text-5xl">I'm Mohammed Sohail, a full stack web developer.</h2>
                        </div>

                        <div className="flex text-gray-700 flex-col my-10 space-y-5 text-2xl tracking-tight">

                            <p>I thoughtfully design, expertly build and carefully maintain meaningful, results-driven websites and applications that are a pleasure to use. I mainly develop web applications in Laravel/PHP alongside Next.js, Livewire or Inertia.</p>

                            <p>I am currently pursuing my CS degree at Bilkent University, Ankara and I work as a freelance web developer.</p>

                        </div>
                    </div>

                    <div class="justify-self-end">
                        <Image src={profilePic} alt="Mohammed Sohail" width={490} height={507}></Image>
                    </div>

                </div>
            </section>
        </>
  )
}
