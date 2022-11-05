import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact - Mohammed Sohail"
        description="I am currently available for new projects and I will be glad to
        discuss your project via email"
      />
      <section className="mb-48 flex h-full flex-col place-items-center space-y-5 pt-16 text-center">
        <span className="text-xl">
          I am currently available for new projects and I will be glad to
          discuss your project via email
        </span>
        <h1 className="text-3xl hover:underline sm:text-5xl md:text-7xl">
          <a href="mailto:hey@msohail.dev">hey@msohail.dev</a>
        </h1>
      </section>
    </>
  );
}
