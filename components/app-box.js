import Image from 'next/image'

export default function AppBox(props) {
    return (
        <div className="bg-white rounded-xl p-2 items-center filter shadow-md space-x-4">
            <div className="flex items-center space-x-4">
                <div className=""><Image width={119} height={100} src={props.image}></Image></div>
                <div class="flex flex-col space-y-2 justify-evenly">
                    <h3 className="text-3xl">{ props.title }</h3>
                    <p className="hidden md:block text-lg font-body">{ props.description }</p>
                </div>
            </div>
            <p className="md:hidden text-lg font-body">{ props.description }</p>
        </div>
    )
}
