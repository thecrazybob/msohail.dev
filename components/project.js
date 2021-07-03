import Link from 'next/link'
import Image from 'next/image'

export default function Project(props) {
    return (
        <div className={`${ props.featured == true ? "border-b-2 border-black dark:border-white" : "" } grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20 ${ props.removePadding ? "" : "pt-20"}`}>
            <div className="flex flex-col space-y-5 dark:text-gray-300">
                { props.featured == true ? <h2 className="text-4xl mb-5">Featured Project</h2> : "" }

                <span className="font-medium text-xl">{ props.title }</span>

                <p className="w-full md:w-2/3 text-xl">{ props.description }</p>

                <span className="border-b max-w-max border-gray-400 text-gray-800 dark:text-gray-300">Tech used:</span>

                <div className="flex gap-4 flex-wrap">
                    { Array.isArray(props.tech) ?
                        props.tech.map ((icon, index) => (
                            <div key={index} className="flex drop-shadow-md filter bg-white p-4 rounded-full w-14 items-center justify-center">
                                <Image alt="Technology icon" src={icon}></Image>
                            </div>
                        ))
                        :
                        (props.tech)
                    }

                </div>

                <span className="border-b max-w-max border-gray-400 text-gray-800 dark:text-gray-300">Timeframe:</span>

                <span>{ props.timeframe }</span>

                { props.linkLabel ? (
                <span className="pt-6 border-b border-black dark:border-white max-w-max font-medium tracking-wide"><Link href={props.featured ? "/work" : props.linkUrl}><a rel="nofollow">{ props.featured ? "View of all my work" : props.linkLabel } ↗</a></Link></span>
                ) : ""}
                </div>

            <div className="border-black dark:border-white border-4 bg-white justify-center rounded-xl h-96" style={{ position: 'relative'}}>
                <div className="flex justify-center h-full items-center">
                    <div className="w-4/6">
                        <Image src={props.image}></Image>
                    </div>
                </div>
            </div>

        </div>
    )
}
