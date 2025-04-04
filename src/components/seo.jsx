import Head from "next/head";

const SEO = ({ font }) => (
  <>
    <Head>
      <title>
        Vishal Engineers & Galvanizers Pvt. Ltd.
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Vishal Engineers & Galvanizers Pvt. Ltd." />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href={font} rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
