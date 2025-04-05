const NEXT_API_URL = "http://vegadmin.cittaserver.com/api"

async function fetchWithRevalidate(path) {
  const res = await fetch(`${process.env.NEXT_API_URL}/${path}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
  }

  return res.json();
}

// Individual fetch functions for each API

export const fetchAboutInfra = () => fetchWithRevalidate("aboutinfra");
export const fetchAboutUs = () => fetchWithRevalidate("aboutus");
export const fetchAboutVision = () => fetchWithRevalidate("aboutvision");
export const fetchBlogs = () => fetchWithRevalidate("blogs");
export const fetchClientele = () => fetchWithRevalidate("clientele");
export const fetchClientStory = () => fetchWithRevalidate("clientstory");
export const fetchLandingPageInfo = () => fetchWithRevalidate("landingpageinfo");
export const fetchLandingSlides = () => fetchWithRevalidate("landingslides");
export const fetchPostBlogs = () => fetchWithRevalidate("postblogs");
export const fetchServiceDetails = () => fetchWithRevalidate("servicedetails");
export const fetchWorkProcess = () => fetchWithRevalidate("workprocess");
