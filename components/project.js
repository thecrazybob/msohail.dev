import Link from 'next/link'
import Image from 'next/image'

export default function Project(props) {
    return (
        <div className={`${ props.featured == true ? "border-b-2 border-black" : "pt-20" } grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20`}>
            <div className="flex flex-col space-y-5">
                { props.featured == true ? <h2 className="text-4xl mb-5">Featured Project</h2> : "" }

                <span className="font-medium text-xl">{ props.title }</span>

                <p className="w-full md:w-2/3 text-xl">{ props.description }</p>

                <span className="border-b max-w-max border-gray-400 text-gray-800">Tech used:</span>

                <div className="flex space-x-4">
                    { Array.isArray(props.tech) ?
                        props.tech.map (icon => (
                            <div className="flex drop-shadow-md filter bg-white p-4 rounded-full w-14 items-center justify-center">
                                <Image src={icon}></Image>
                            </div>
                        ))
                        :
                        (props.tech)
                    }

                </div>

                <span className="border-b max-w-max border-gray-400 text-gray-800">Timeframe:</span>

                <span>{ props.timeframe }</span>

                <span className="pt-6 border-b border-black max-w-max font-medium tracking-wide"><Link href="/work"><a>View of all my work ↗</a></Link></span>
            </div>

            <div className="border-black border-4 bg-white justify-center rounded-xl h-96" style={{ position: 'relative'}}>
                <div className="flex h-full justify-center items-center px-16">
                    <Image src={props.image} width={465} height={114}></Image>
                </div>
            </div>

        </div>
    )
}
