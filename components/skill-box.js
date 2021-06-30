import Image from 'next/image'
import laravelLogo from '../public/laravel.svg'

export default function SkillBox(props) {
    return (
        <div className="flex items-center divide-black bg-white rounded-xl p-4 divide-x-2 filter shadow-md">
            <div className="mx-4 flex justify-center items-center"><Image width={48} height={48} layout="fixed" src={props.logo}></Image></div>
            <div className="mx-2 px-4 flex flex-col space-y-2">
                <div className="uppercase border-b border-black max-w-max font-bold">{props.title}</div>
                <div className="font-body">{props.description}</div>
            </div>
        </div>
    )
}
