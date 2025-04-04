// utils/staticPropsFetchers.js

import {
  fetchAboutInfra,
  fetchAboutUs,
  fetchAboutVision,
  fetchBlogs,
  fetchClientele,
  fetchClientStory,
  fetchLandingPageInfo,
  fetchLandingSlides,
  fetchPostBlogs,
  fetchServiceDetails,
  fetchWorkProcess,
} from "./apifetchers";

export const getAboutInfraStaticProps = async () => ({
  props: { aboutInfra: await fetchAboutInfra() },
  revalidate: 10,
});

export const getAboutUsStaticProps = async () => ({
  props: { aboutUs: await fetchAboutUs() },
  revalidate: 10,
});

export const getAboutVisionStaticProps = async () => ({
  props: { aboutVision: await fetchAboutVision() },
  revalidate: 10,
});

export const getBlogsStaticProps = async () => ({
  props: { blogs: await fetchBlogs() },
  revalidate: 10,
});

export const getClienteleStaticProps = async () => ({
  props: { clientele: await fetchClientele() },
  revalidate: 10,
});

export const getClientStoryStaticProps = async () => ({
  props: { clientStory: await fetchClientStory() },
  revalidate: 10,
});

export const getLandingPageInfoStaticProps = async () => ({
  props: { landingPageInfo: await fetchLandingPageInfo() },
  revalidate: 10,
});

export async function getLandingSlidesStaticProps() {
  return {
    props: {landingSlides: await fetchLandingSlides()},
    revalidate: 10,
  };
}

export const getPostBlogsStaticProps = async () => ({
  props: { postBlogs: await fetchPostBlogs() },
  revalidate: 10,
});

export const getServiceDetailsStaticProps = async () => ({
  props: { serviceDetails: await fetchServiceDetails() },
  revalidate: 10,
});

export const getWorkProcessStaticProps = async () => ({
  props: { workProcess: await fetchWorkProcess() },
  revalidate: 10,
});
