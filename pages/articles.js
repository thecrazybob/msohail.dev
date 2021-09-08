import TitleBar from "../components/title-bar";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Articles({ allPostsData }) {
  return (
    <>
      <NextSeo
        title="Articles - Mohammed Sohail"
        description="I ocassionally write articles on coding, tech and personal tips"
      />
      <TitleBar
        title="Articles"
        description="I ocassionally write articles on coding, tech and personal tips"
      ></TitleBar>

      <section className="-mt-16 mb-16 md:mb-32 flex flex-col space-y-8 divide-y divide-black dark:divide-white divide">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <div key={id} className="pt-8">
            <Link href={`/posts/${id}`}>
              <a>
                <h4 className="text-3xl">
                  {title} - <Date dateString={date} />
                </h4>
                <p className="text-xl">{excerpt}</p>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
