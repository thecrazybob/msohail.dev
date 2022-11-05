import Link from "next/link";

export default function LatestArticles() {
  return (
    <section className="my-16 border-b-2 border-black pb-20 font-body text-xl dark:border-white">
      <h2 className="mb-10 font-sans text-4xl">Latest Articles</h2>

      <div className="flex flex-col space-y-4">
        <div>
          <h4 className="mb-4 max-w-max border-b border-black font-medium dark:border-white">
            An example article - 20th May 2021
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa
            eros maecenas dis.
          </p>
        </div>
        <div>
          <h4 className="mb-4 max-w-max border-b border-black font-medium dark:border-white">
            An example article - 20th May 2021
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa
            eros maecenas dis.
          </p>
        </div>
        <div>
          <h4 className="mb-4 max-w-max border-b border-black font-medium dark:border-white">
            An example article - 20th May 2021
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa
            eros maecenas dis.
          </p>
        </div>
        <div>
          <h4 className="mb-4 max-w-max border-b border-black font-medium dark:border-white">
            An example article - 20th May 2021
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa
            eros maecenas dis.
          </p>
        </div>
        <div>
          <h4 className="mb-4 max-w-max border-b border-black font-medium dark:border-white">
            An example article - 20th May 2021
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa
            eros maecenas dis.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-max border-b border-black font-medium dark:border-white">
        <Link href="/articles">
          <a>View all of my articles ↗</a>
        </Link>
      </div>
    </section>
  );
}
