import Image from 'next/image'
import arrowDown from '../public/arrow-down.svg'

export default function TitleBar(props) {
    return (
        <section className="mb-10 pb-20">

            <div className="grid gap-y-6 md:gap-0 md:grid-cols-2 items-center">
                <h2 className="text-5xl">{props.title}</h2>
                <div className="text-2xl text-gray-800 dark:text-gray-300 justify-self-end">{props.description}</div>
            </div>

            <div className="mt-16 dark:invert">
                <Image src={arrowDown} layout="fixed"></Image>
            </div>

        </section>
    )
}
