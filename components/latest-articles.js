import Link from "next/link"

export default function LatestArticles() {
    return (
        <section className="my-16 font-body border-b-2 border-black dark:border-white pb-20 text-xl">
            <h2 className="text-4xl mb-10 font-sans">Latest Articles</h2>

            <div className="flex flex-col space-y-4">
                <div>
                    <h4 className="font-medium border-b border-black max-w-max mb-4">An example article - 20th May 2021</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa eros maecenas dis.</p>
                </div>
                <div>
                    <h4 className="font-medium border-b border-black max-w-max mb-4">An example article - 20th May 2021</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa eros maecenas dis.</p>
                </div>
                <div>
                    <h4 className="font-medium border-b border-black max-w-max mb-4">An example article - 20th May 2021</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa eros maecenas dis.</p>
                </div>
                <div>
                    <h4 className="font-medium border-b border-black max-w-max mb-4">An example article - 20th May 2021</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa eros maecenas dis.</p>
                </div>
                <div>
                    <h4 className="font-medium border-b border-black max-w-max mb-4">An example article - 20th May 2021</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa eros maecenas dis.</p>
                </div>
            </div>

            <div className="mt-10 border-b max-w-max border-black font-medium"><Link href="/articles"><a>View all of my articles ↗</a></Link></div>
        </section>
    )
}
