import SEO from "../components/seo";
import AppContext from "../context/AppContext";
import "./index.scss";
import { useState } from "react";
// import AnimatedIntro from "../components/common/AnimatedIntro";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading ? (
        <AnimatedIntro onFinish={() => setLoading(false)} /> 
      ) : ( */}
      {/* <> */}
      <SEO font="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" />
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
      {/* </>
      )} */}
    </>
  );
}

export default MyApp;
