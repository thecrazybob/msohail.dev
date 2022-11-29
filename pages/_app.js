import "tailwindcss/tailwind.css";
import "../assets/global.css";
import mailgo from "mailgo";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";

import Layout from "../pages/_layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    mailgo();
  }, []);

  return (
    <Layout>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://msohail.dev",
          site_name: "Mohammed Sohail",
        }}
        twitter={{
          handle: "@msohaildev",
          site: "@msohaildev",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
