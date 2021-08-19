import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact - Mohammed Sohail"
        description="I am currently available for new projects and I will be glad to
        discuss your project via email"
      />
      <section className="flex flex-col space-y-5 place-items-center text-center h-full pt-16 mb-48">
        <span className="text-xl">
          I am currently available for new projects and I will be glad to
          discuss your project via email
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl hover:underline">
          <a href="mailto:hey@msohail.dev">hey@msohail.dev</a>
        </h1>
      </section>
    </>
  );
}
