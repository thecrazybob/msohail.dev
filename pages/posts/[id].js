import { getAllPostIds, getPostData } from "../../lib/posts";
import { NextSeo } from "next-seo";
import Date from "../../components/date";
import TitleBar from "../../components/title-bar";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <NextSeo
        title={postData.title + " - Mohammed Sohail"}
        description="I ocassionally write articles on coding, tech and personal tips"
      />
      <TitleBar
        title={postData.title}
        description={<Date dateString={postData.date} />}
      ></TitleBar>

      <section className="-mt-16 mb-16 md:mb-24 text-lg prose dark:text-gray-300">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </>
  );
}
