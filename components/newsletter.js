import arrowIcon from '../public/arrow.svg'
import Image from 'next/image'

export default function Newsletter() {
    return (
        <section className="font-body mb-20">
            <div className="text-4xl mb-10 font-sans">Newsletter</div>
            <div className="text-xl">I ocassionally send out newsletters where I share life updates, web development tips and talk about newly-released tech. If you are interested, you can signup here: </div>
            <div className="border-2 w-full lg:w-3/5 border-black dark:border-white rounded-lg bg-white flex my-10 justify-between">
                <input className="w-full rounded-md text-xl px-4" type="email" name="email" id="email" />
                <button className="bg-black max-w-max rounded-md text-white text-xl px-4 py-2 m-3 flex items-center space-x-2" type="submit"><Image layout="fixed" src={arrowIcon}></Image><span>Submit</span></button>
            </div>
        </section>
    )
}
