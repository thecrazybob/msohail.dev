import Link from "next/link";
import Date from "../components/date";

export default function LatestArticles({ allPostsData }) {
  return (
    <section className="my-16 font-body border-b-2 border-black dark:border-white pb-20 text-xl">
      <h2 className="text-4xl mb-10 font-sans">Latest Articles</h2>

      <div className="flex flex-col space-y-4">
        {allPostsData.slice(0, 5).map(({ id, date, title, excerpt }) => (
          <div key={id}>
            <h4 className="font-medium border-b border-black dark:border-white max-w-max mb-4">
              <Link href={`/posts/${id}`}>
                <a>
                  {title} - <Date dateString={date} />
                </a>
              </Link>
            </h4>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 border-b max-w-max border-black dark:border-white font-medium">
        <Link href="/articles">
          <a>View all of my articles ↗</a>
        </Link>
      </div>
    </section>
  );
}
